const {connectToMongoDB,closeMongoDBConnection} = require('../connectDB'); // Assuming connectToDB.js is in the same directory

async function getJobs() {
    try {
        // Connect to the database
        const db = await connectToMongoDB();

        // Access the Organizations collection
        const organizationsCollection = db.collection('Organizations');

        // Find documents with the job array field
        const organizationsWithJobs = await organizationsCollection.find({ jobs: { $exists: true } }).toArray();

        // Extract the job array with organization ID and name
        const jobs = organizationsWithJobs.map(org => ({
            organizationId: org._id,
            organizationName: org.name,
            jobArray: org.jobs
        }));

        console.log(jobs)
        return ({jobs:jobs,error:null});
    } catch (error) {
        return({jobs:null,error:error})
    }
    finally{
        await closeMongoDBConnection();
    }
}

module.exports = {getJobs};
