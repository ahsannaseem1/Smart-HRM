const nodemailer = require('nodemailer');
const fs = require('fs');
const PDFDocument = require('pdfkit');
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

    // Create a PDF document using pdfkit
    const pdfPath = 'payroll_summary.pdf';
    const pdfStream = fs.createWriteStream(pdfPath);
    const pdfDoc = new PDFDocument();

    // Add some design elements to the PDF document
    pdfDoc.fillColor('blue').fontSize(20).text('Payroll Summary', 100, 50);
    pdfDoc.fillColor('black').fontSize(14).text(`Employee Name: ${payrollInfo.employeeName}`, 100, 100);
    pdfDoc.fillColor('black').fontSize(14).text(`Salary: ${payrollInfo.salary}`, 100, 120);
    pdfDoc.fillColor('black').fontSize(14).text(`Month: ${payrollInfo.month}`, 100, 140);
    pdfDoc.fillColor('black').fontSize(14).text(`Year: ${payrollInfo.year}`, 100, 160);

    // Create a table to display the payroll information
    const table = {
        headers: ['Total Pay', 'Bonuses', 'Allowances', 'Deductions'],
        rows: [
            [payrollInfo.totalPay, payrollInfo.bonus, payrollInfo.allowances.total, payrollInfo.deductions.total],
        ],
    };

    // Draw the table
const tableTop = 200;
const columnWidth = 120; // Increase the column width
const rowHeight = 20;

// Draw the header row
pdfDoc.fillColor('white').rect(100, tableTop, columnWidth * table.headers.length, rowHeight).fill();
pdfDoc.fillColor('black').fontSize(12);
table.headers.forEach((header, i) => {
    pdfDoc.font('Helvetica-Bold');
    pdfDoc.text(header, 100 + i * columnWidth, tableTop + rowHeight / 2, {
        width: columnWidth,
        align: 'center',
    });
});

// Draw the data rows
pdfDoc.fillColor('black').fontSize(10);
table.rows.forEach((row, i) => {
    // Make the employeeName, salary, etc. columns bold
    if (i === 0) {
        pdfDoc.font('Helvetica-Bold');
    } else {
        pdfDoc.font('Helvetica');
    }

    // Adjust the alignment to 'center' for the data rows
    pdfDoc.text(row[0], 100 + i * columnWidth, tableTop + (i + 1) * rowHeight + rowHeight / 2, {
        width: columnWidth,
        align: 'center',
    });
    pdfDoc.text(row[1], 100 + columnWidth + i * columnWidth, tableTop + (i + 1) * rowHeight + rowHeight / 2, {
        width: columnWidth,
        align: 'center',
    });
    pdfDoc.text(row[2], 100 + 2 * columnWidth + i * columnWidth, tableTop + (i + 1) * rowHeight + rowHeight / 2, {
        width: columnWidth,
        align: 'center',
    });
    pdfDoc.text(row[3], 100 + 3 * columnWidth + i * columnWidth, tableTop + (i + 1) * rowHeight + rowHeight / 2, {
        width: columnWidth,
        align: 'center',
    });
});



    // End the PDF document
    pdfDoc.end();
    pdfDoc.pipe(pdfStream);

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
};

module.exports = {
    sendEmail,
};
