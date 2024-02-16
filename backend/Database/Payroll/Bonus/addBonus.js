const { connectToMongoDB, closeMongoDBConnection } = require('../../connectDB');
const {ObjectId}=require('mongodb');

async function addBonus(employeeId, bonusType, date, month, year, bonusAmount) {
    try {
        const db = await connectToMongoDB();
        const collection = db.collection('Employees');

        // Check if the employee document exists
        const employee = await collection.findOne({ _id: new ObjectId(employeeId)});

        if (employee) {
            // Check if the employee document has a 'bonuses' array, and create it if not
            const bonusesArray = employee.bonuses || [];
            
            // Append the new bonus to the 'bonuses' array
            bonusesArray.push({
                bonusType: bonusType,
                date: new Date(year, month - 1, date),
                bonusAmount: bonusAmount,
                month:month,
                date:date,
                year:year,
            });

            // Update the employee document with the new 'bonuses' array
            await collection.updateOne({ _id: new ObjectId (employeeId) }, { $set: { bonuses: bonusesArray } });

            console.log(`Added bonus to employee with ID: ${employeeId}`);
            return{error:null}
        } else {
            console.log(`Employee with ID ${employeeId} not found.`);
        }

        await closeMongoDBConnection();
    } catch (error) {
        console.error('Error adding bonus to MongoDB Atlas:', error);
        return ({error:error});
    }
}

module.exports = {
    addBonus
};
