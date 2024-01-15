const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
require('dotenv').config();

const createHash = async (password) => {
  try {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hash = await bcrypt.hash(password, salt);

    return hash;
  } catch (error) {
    throw error;
  }
};

const uri =process.env.DB_URI;
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
  const hashedPassword = await createHash(password);
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("Organizations");

    let organizationDocument = {
      name: name,
      numberOfEmployees: numberOfEmployees,
      numberOfHRs: numberOfHRs,
      email: email,
      address: address,
      contact: contact,
      password: hashedPassword,
    };

    const result = await col.insertOne(organizationDocument);
    const objectId = result.insertedId;

    return objectId;
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
};
module.exports = {
  addOrganization,
};
