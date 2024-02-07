const { connectToMongoDB, closeMongoDBConnection } = require('../connectDB');
const { sendEmail } = require('./SendMail/sendMail'); // Adjust the path accordingly

async function calculatePayroll(organizationId, year, month) {
    try {
        const db = await connectToMongoDB();
        const employeesCollection = db.collection('Employees');
        const payrollCollection = db.collection('payroll');

        const employees = await employeesCollection.find({ organizationId }).toArray();

        const payrollPromises = employees.map(async (employee) => {
            const { _id, name, email, salary, bonuses, Allowances, deductions } = employee;

            // Convert salary to integer
            const parsedSalary = parseInt(salary);

            // Check if bonuses array exists and has items
            const bonus = bonuses && bonuses.length > 0
                ? bonuses.find((bonus) => bonus.year === year && bonus.month === month)
                : undefined;

            // Check if Allowances array exists
            const totalAllowances = Allowances && Allowances.length > 0
                ? Allowances.reduce((total, allowance) => total + parseInt(allowance.amount), 0)
                : 0;

            // Check if deductions array exists
            const totalDeductions = deductions && deductions.length > 0
                ? deductions.reduce((total, deduction) => total + parseInt(deduction.deductionAmount), 0)
                : 0;

            // Convert bonus amount to integer
            const bonusAmount = bonus ? parseInt(bonus.bonusAmount) : 0;

            // Calculate total pay after converting all values to integers
            const totalPay = parsedSalary + bonusAmount + totalAllowances - totalDeductions;

            // Extract types of allowances
            const allowanceTypes = Allowances && Allowances.length > 0
                ? Allowances.map((allowance) => allowance.type)
                : [];

            // Extract types of deductions
            const deductionTypes = deductions && deductions.length > 0
                ? deductions.map((deduction) => deduction.deductionType)
                : [];

            // Extract types of bonuses
            const bonusTypes = bonuses && bonuses.length > 0
                ? bonuses.map((bonus) => bonus.bonusType)
                : [];

            const payrollEntry = {
                organizationId,
                employeeId: _id,
                employeeName: name,
                email,
                salary: parsedSalary,
                month,
                year,
                totalPay,
                bonus: bonusAmount,
                allowances: {
                    total: totalAllowances,
                    types: allowanceTypes,
                },
                deductions: {
                    total: totalDeductions,
                    types: deductionTypes,
                },
                bonuses: {
                    types: bonusTypes,
                },
            };

            // Use the email service component
            await sendEmail("hafizzabdullah999@gmail.com", `Payroll ${month} ${year}`, JSON.stringify(payrollEntry, null, 2));

            return payrollEntry;
        });

        // Wait for all emails to be sent and all entries to be calculated before proceeding
        const payroll = await Promise.all(payrollPromises);

        // Store the entire payrollEntry in the database
        await payrollCollection.insertMany(payroll);

        const log = `Payroll calculation and email sending completed for ${year}-${month}`;

        console.log(log);

        return {
            data: payroll,
            log,
        };
    } finally {
        await closeMongoDBConnection();
    }
}

module.exports = {
    calculatePayroll,
};
