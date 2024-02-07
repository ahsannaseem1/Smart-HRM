const MongoClient = require('mongodb').MongoClient;

async function calculatePayroll(organizationId, bonusArray, month) {
    const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority';
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('<database>');
        const employeesCollection = database.collection('employees');
        const payrollCollection = database.collection('payroll');

        const employees = await employeesCollection.find({ organizationId }).toArray();

        const payroll = employees.map((employee) => {
            const { salary, overtimeHours, deductions, allowances } = employee;
            const bonus = bonusArray.find((bonus) => bonus.employeeId === employee._id);

            const totalPay = salary + (bonus ? bonus.amount : 0) + (overtimeHours * hourlyRate) + allowances - deductions;

            return {
                employeeId: employee._id,
                month,
                totalPay,
            };
        });

        await payrollCollection.insertMany(payroll);

        return payroll;
    } finally {
        await client.close();
    }
}