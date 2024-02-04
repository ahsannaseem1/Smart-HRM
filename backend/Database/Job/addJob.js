const {connectToMongoDB,closeMongoDBConnection}=require('../connectDB')

async function connectToDb(organizationId, jobTitle, jobDescription, location) {
   
    try {

        const db = await connectToMongoDB();
        const organizationsCollection = db.collection('Organizations');

        const organization = await organizationsCollection.findOne({ organizationId });

        if (organization) {
            if (!organization.jobs) {
                organization.jobs = [];
            }

            organization.jobs.push({
                jobTitle,
                jobDescription,
                location,
                status: 'Open'
            });

            await organizationsCollection.updateOne({ organizationId }, { $set: organization });

            console.log('Job added successfully!');
        } else {
            console.log('Organization not found!');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        await closeMongoDBConnection();
    }
}

// Usage example
connectToDb('org123', 'Software Engineer', 'Job description...', 'New York');``