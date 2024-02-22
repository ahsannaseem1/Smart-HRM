const { connectToMongoDB, closeMongoDBConnection } = require('../../connectDB');
const { ObjectId } = require('mongodb');

async function addDeductionToEmployee(employeeId, deductionType, month, year, deductionReason, deductionAmount) {
    try {
        // Connect to MongoDB Atlas
        const db = await connectToMongoDB();

        // Get the employee collection
        const employeeCollection = db.collection('Employees');

        // Find the employee document based on employeeId
        const employee = await employeeCollection.findOne({ _id: new ObjectId(employeeId) });

        // If employee document exists, add the deduction
        if (employee) {
            // Check if the employee document has a 'deductions' array, and create it if not
            const deductionsArray = employee.deductions || [];

            // Append the new deduction to the 'deductions' array
            deductionsArray.push({
                deductionType: deductionType,
                month: month,
                year: year,
                deductionReason: deductionReason,
                deductionAmount: deductionAmount
            });

            // Update the employee document with the new 'deductions' array
            await employeeCollection.updateOne(
                { _id: new ObjectId(employeeId) },
                { $set: { deductions: deductionsArray } }
            );

            console.log('Deduction added successfully.');
            return({error:null});

        } else {
            console.log('Employee not found.');
        }
    } catch (error) {
        
        return({error:error});
    } finally {
        // Close the MongoDB connection
        await closeMongoDBConnection();
    }
}

module.exports = {
    addDeductionToEmployee
};
