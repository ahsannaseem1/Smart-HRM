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

const addHR = async (id, email, password) => {
  const hashedPassword = await createHash(password);
  try {
    await client.connect();
    const db = client.db(dbName);

    const col = db.collection("HR");

    let hrDocument = {
      id: id,
      email: email,
      password: hashedPassword,
    };

    const p = await col.insertOne(hrDocument);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
};
module.exports = {
  addHR,
};
