const MongoClient = require('mongodb').MongoClient;


async function addAllowancesToEmployees() {
    const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();

        const database = client.db('<database>');
        const collection = database.collection('<collection>');

        // Find employees without allowances
        const employeesWithoutAllowances = await collection.find({ Allowances: { $exists: false } }).toArray();

        // Add allowances to employees without allowances
        for (const employee of employeesWithoutAllowances) {
            await collection.updateOne({ _id: employee._id }, { $set: { Allowances: [] } });
        }

        console.log('Allowances added successfully!');
    } catch (error) {
        console.error('Error adding allowances:', error);
    } finally {
        await client.close();
    }
}

addAllowancesToEmployees();