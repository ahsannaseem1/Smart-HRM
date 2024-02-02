
const { MongoClient, Binary } = require('mongodb');
const { ObjectId } = require('mongodb');

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

async function addRanking(flaskApiResponse) {
    try {
        const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();

        const database = mongoClient.db(dbName);
        const collection = database.collection('Applicants');

        for (const applicantWithRanking of flaskApiResponse) {
            const applicantId = applicantWithRanking.id;

            console.log('Updating document with _id:', applicantId);

            const ranking = applicantWithRanking.ranking;

            const result = await collection.updateOne({ _id: new ObjectId(applicantId) }, { $set: { ranking: ranking } });
        }

        await mongoClient.close();
        console.log('MongoDB collection updated successfully');
    } catch (error) {
        console.error('Error updating MongoDB collection:', error);
        throw error;
    }
}
module.exports={
    addRanking
}