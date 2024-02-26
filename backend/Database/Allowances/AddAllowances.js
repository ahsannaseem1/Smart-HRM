const { connectToMongoDB,closeMongoDBConnection } = require('../connectDB');
const {ObjectId}=require('mongodb');

async function addAllowances(employeeId, allowanceType, allowanceAmount) {
    console.log(employeeId)
    try {
        const db = await connectToMongoDB();
        const collection = db.collection('Employees');

        // Find employee by ID
        const employee = await collection.findOne({ _id: new ObjectId (employeeId) });

        // If employee exists, add allowance
        if (employee) {
            const allowances = employee.Allowances || [];
            allowances.push({ type: allowanceType, amount: allowanceAmount });

            await collection.updateOne({ _id:new ObjectId(employee._id) }, { $set: { Allowances: allowances } });

            console.log('Allowance added successfully!');
        } else {
            console.log('Employee not found!');
        }
    } catch (error) {
        console.error('Error adding allowance:', error);
    } finally {
        await closeMongoDBConnection();
    }
}

module.exports = {
    addAllowances
};