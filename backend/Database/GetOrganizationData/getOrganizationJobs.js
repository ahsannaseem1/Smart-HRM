const {connectToMongoDB,closeMongoDBConnection} = require('../connectDB'); 
const {ObjectId}=require('mongodb');

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


module.exports = {getJobsByOrganizationId};
