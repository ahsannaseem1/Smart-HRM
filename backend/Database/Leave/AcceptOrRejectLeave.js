const { MongoClient } = require("mongodb");
require("dotenv").config();
const { ObjectId } = require("mongodb");

const dbUri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

async function acceptOrRejectLeave(employeeId, leaveId, status) {
  const uri = dbUri;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db(dbName);
    const employeeCollection = database.collection("Employees");

    const result = await employeeCollection.updateOne(
      {
        _id: new ObjectId(employeeId),
        "leaveRequest._id": new ObjectId(leaveId),
        "leaveRequest.status": "pending",
      },

      {
        $set: { "leaveRequest.$.status": status },
      }
    );

    if (status === "Approved") {
      const leave = await employeeCollection.findOne({
        _id: new ObjectId(employeeId),
      });

      if (leave) {
        const leaveRequest = leave.leaveRequest.find((request) =>
          request._id.equals(new ObjectId(leaveId))
        );

        if (leaveRequest) {
          const leaveDays = parseInt(leaveRequest.leaveDays, 10);
          const currentLeaves = parseInt(leave.leaves, 10);

          if (!isNaN(leaveDays) && !isNaN(currentLeaves)) {
            const updatedLeaves = currentLeaves + leaveDays;

            await employeeCollection.updateOne(
              { _id: new ObjectId(employeeId) },
              { $set: { leaves: updatedLeaves.toString() } }
            );
          }
        }
      }
    }

    return { error: null, message: "Leave request updated successfully" };
  } catch (error) {
    return { error: error, message: null };
  } finally {
    await client.close();
  }
}

module.exports = {
  acceptOrRejectLeave,
};
