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

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addEmployee = async (organizationId, name, email, password, salary, position, contact, dateOfBirth, department, employeeId, allowances, leaves) => {
  const hashedPassword = await createHash(password);

  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("Employees");

    let employeeDocument = {
      organizationId: organizationId,
      employeeId: employeeId,
      name: name,
      email: email,
      password: hashedPassword,
      salary: salary,
      allowances: allowances || {},
      leaves: leaves || 0,
      department: department,
      position: position,
      contact: contact,
      dateOfBirth: dateOfBirth,
    };

    const result = await col.insertOne(employeeDocument);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
};

module.exports = {
  addEmployee,
};
