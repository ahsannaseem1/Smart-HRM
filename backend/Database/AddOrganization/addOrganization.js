const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
require('dotenv').config();
const {generateHash}=require('../utilities/generatePasswordHash')

// const createHash = async (password) => {
//   const saltRounds = 10;
//   const salt = await bcrypt.genSalt(saltRounds);
//   return bcrypt.hash(password, salt);
// };

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addOrganization = async (
  name,
  numberOfEmployees,
  numberOfHRs,
  email,
  address,
  contact,
  password
) => {
  const hashedPassword = await generateHash(password);

  try {
    await client.connect();
    const col = client.db(dbName).collection("Organizations");

    // Check if email or name is already registered
    const existingOrganization = await col.findOne({
      $or: [{ email: email }, { name: name }],
    });

    if (existingOrganization) {
      return {
        organizationId: null,
        error: `${existingOrganization.email === email ? email : name} is already registered.`,
      };
    }

    const organizationDocument = {
      name,
      numberOfEmployees,
      numberOfHRs,
      email,
      address,
      contact,
      password: hashedPassword,
    };

    const result = await col.insertOne(organizationDocument);
    console.log(result);
    const organizationId = result.insertedId;
    const organizationName=name;
    return {
      organizationId,
      organizationName,
      error: null,
    };
  } catch (err) {
    console.error(err.stack);
    return {
      organizationId: null,
      organizationName:null,
      error: err.message,
    };
  } finally {
    await client.close();
  }
};

module.exports = {
  addOrganization,
};
