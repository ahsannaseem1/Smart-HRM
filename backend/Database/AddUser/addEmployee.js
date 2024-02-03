const { MongoClient } = require("mongodb");
const { generateHash } = require("../utilities/generatePasswordHash");
const { getHrAndEmployee } = require("../GetOrganizationData/GetHRandEmployee");
require("dotenv").config();

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const addEmployee = async (
  organizationId,
  hrEmail,
  name,
  email,
  password,
  salary,
  position,
  contact,
  dateOfBirth,
  department,
  employeeId,
  allowances,
  leaves
) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const col = db.collection("Employees");

    // Check if employee with the same email already exists
    const existingEmployee = await col.findOne({ email: email });
    if (existingEmployee) {
      return {
        message: null,
        error: "Employee is already registered with these credentials.",
      };
    }
    const hashedPassword = await generateHash(password);

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
    if (result) {
      const {
        userType,
        user,
        employeeData,
        totalLeavesRequestPending,
        departments,
      } = await getHrAndEmployee(hrEmail, organizationId);
      const data = {
        userType: userType,
        user: user,
        employeeData: employeeData,
        totalLeavesRequestPending: totalLeavesRequestPending,
        departments: departments,
      };
      return { data: data, error: null };
    }
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
};

module.exports = {
  addEmployee,
};
