const express = require('express');
const multer = require('multer');
const { Binary } = require('mongodb');
const { addApplicant } = require('../../Database/Applicant/addApplicant'); // Replace with the correct path

const router = express.Router();

// Multer configuration
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

// Define the route to handle file upload
router.post('/', upload.single('pdf'), async (req, res) => {
  try {
    const {name, password, email,phoneNumber,jobId,orgId } = req.body;
    console.log(name, password, email, phoneNumber,jobId,orgId);

    // Convert the file buffer to BinData
    const pdfBuffer = req.file.buffer; // Access the buffer of the uploaded file
    const pdfBinData = new Binary(pdfBuffer);
    // Use the addApplicant function to store applicant data
    const result = await addApplicant(name,email, password,phoneNumber,jobId,orgId, pdfBinData);
console.log(result);
    if (result.error) {
      res.status(400).json({ error: result.error });
    } else {
      res.status(200).json({ message: 'Applicant created successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the applicant', details: error.message });
  }
});

module.exports = router;
