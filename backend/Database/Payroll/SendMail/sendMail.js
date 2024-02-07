const nodemailer = require('nodemailer');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

const sendEmail = async (to, subject, payrollInfo) => {
    // Create a transport to send emails (replace with your email service configuration)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hafizzabdullah999@gmail.com',
            pass: 'fnhn pqch slet gzhm',
        },
    });

    // Format payroll information
    const formattedPayroll = `
        Employee Name: ${payrollInfo.employeeName}
        Salary: ${payrollInfo.salary}
        Month: ${payrollInfo.month}
        Year: ${payrollInfo.year}
        Total Pay: ${payrollInfo.totalPay}
        Bonuses: ${payrollInfo.bonus}
        Allowances: ${payrollInfo.allowances.total}
        Deductions: ${payrollInfo.deductions.total}
    `;

    // Create a PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText(formattedPayroll);

    // Save the PDF to a buffer
    const pdfBytes = await pdfDoc.save();

    // Email options with attachment
    const mailOptions = {
        from: 'hafizzabdullah999@gmail.com',
        to,
        subject,
        text: formattedPayroll,
        attachments: [
            {
                filename: 'payroll_summary.pdf',
                content: pdfBytes,
                encoding: 'base64',
            },
        ],
    };

    // Send email
    await transporter.sendMail(mailOptions);
};

module.exports = {
    sendEmail,
};
