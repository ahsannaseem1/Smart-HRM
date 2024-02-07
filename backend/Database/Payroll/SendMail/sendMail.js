const nodemailer = require('nodemailer');
const fs = require('fs');
const pdf = require('html-pdf');
require('dotenv').config();

const sendEmail = async (to, subject, payrollInfo) => {
    // Create a transport to send emails (replace with your email service configuration)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    // Get the current date, day, and time
    const currentDate = new Date().toLocaleDateString();
    const currentDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
    const currentTime = new Date().toLocaleTimeString();

    // Create HTML content for the PDF
    const htmlContent = `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Helvetica', sans-serif;
            background-color: #f5f5f5;
            margin: 20px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }

        .header {
            color: #3498db;
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 100px;
            text-align: center;
        }

        .info {
            font-size: 22px;
            margin-bottom: 10px;
            text-align: left;
            padding-left: 10px;
        }

        .bold {
            font-weight: bold;
        }

        .center {
            text-align: center;
        }

        .table {
            width: 100%;
            margin-top: 80px;
            margin-bottom: 20px;
            border-collapse: collapse;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            overflow: hidden;
        }

        .table th, .table td {
            border: 1px solid #ddd;
            padding: 15px;
            text-align: center;
        }

        .table th {
            background-color: #3498db;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="center">
        <div class="header">Payroll Summary</div>
        <div class="info"><span class="bold">Date:</span>&nbsp;&nbsp; ${currentDate}</div>
        <div class="info"><span class="bold">Day:</span>&nbsp;&nbsp; ${currentDay}</div>
        <div class="info"><span class="bold">Time:</span>&nbsp;&nbsp; ${currentTime}</div>
        <div class="info"><span class="bold">Employee Name:</span>&nbsp;&nbsp; ${payrollInfo.employeeName}</div>
        <div class="info"><span class="bold">Email:</span>&nbsp;&nbsp; ${payrollInfo.email}</div>
        <div class="info"><span class="bold">Base Salary:</span>&nbsp;&nbsp; ${payrollInfo.salary}</div>
        <div class="info"><span class="bold">Month:</span>&nbsp;&nbsp; ${payrollInfo.month}</div>
        <div class="info"><span class="bold">Year:</span>&nbsp;&nbsp; ${payrollInfo.year}</div>
        <div class="info"><span class="bold">Total Pay:</span>&nbsp;&nbsp; ${payrollInfo.totalPay}</div>
        <div class="info"><span class="bold">Bonus:</span>&nbsp;&nbsp; ${payrollInfo.bonus}</div>
        <div class="info"><span class="bold">Allowances:</span>&nbsp;&nbsp; ${payrollInfo.allowances.total}</div>
        <div class="info"><span class="bold">Deductions:</span>&nbsp;&nbsp; ${payrollInfo.deductions.total}</div>
        
        <table class="table">
            <tr>
                <th>Total Pay</th>
                <th>Bonuses</th>
                <th>Allowances</th>
                <th>Deductions</th>
            </tr>
            <tr>
                <td>${payrollInfo.totalPay}</td>
                <td>${payrollInfo.bonus}</td>
                <td>${payrollInfo.allowances.total}</td>
                <td>${payrollInfo.deductions.total}</td>
            </tr>
        </table>
    </div>
</body>
</html>

    
    `;

    // Create a PDF from the HTML content
    const pdfPath = 'payroll_summary.pdf';
    pdf.create(htmlContent).toFile(pdfPath, async (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        // Email options with attachment
        const mailOptions = {
            from: process.env.EMAIL,
            to,
            subject,
            text: 'Please find the attached payroll summary for your reference.',
            attachments: [
                {
                    filename: 'payroll_summary.pdf',
                    path: pdfPath,
                },
            ],
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Remove the generated PDF file
        fs.unlinkSync(pdfPath);
    });
};

module.exports = {
    sendEmail,
};
