const {connectToMongoDB,closeMongoDBConnection} = require('../connectDB'); // Assuming connectToDB.js is in the same directory
const {ObjectId}=require('mongodb');

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

        return ({jobs:jobs,error:null});
    } catch (error) {
        return({jobs:null,error:error})
    }
    finally{
        await closeMongoDBConnection();
    }
}

async function getJobsByOrganizationId(organizationId) {
    try {
        // Connect to the database
        const db = await connectToMongoDB();

        // Access the Organizations collection
        const organizationsCollection = db.collection('Organizations');

        // Find the organization by ID
        const organization = await organizationsCollection.findOne({ _id: new ObjectId(organizationId) });

        // If organization found, return its jobs
        if (organization && organization.jobs) {
            
            return { jobs: organization.jobs, error: null };
        } else {
            return { jobs: null, error: `No jobs found for organization with ID ${organizationId}` };
        }
    } catch (error) {
        return { jobs: null, error: error };
    } finally {
        await closeMongoDBConnection();
    }
}


module.exports = {getJobs,getJobsByOrganizationId};
