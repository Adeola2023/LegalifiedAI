const express = require('express');
const Document = require('../models/document');
const upload = require('../middleware/upload');
const auth = require('../middleware/auth');
const router = express.Router();

// Upload document (auth required)
router.post('/upload', auth, upload.single('document'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const doc = await Document.create({
    userId: req.user.id,
    fileName: req.file.originalname,
    analysisResult: 'Stub analysis',
  });
  res.json({ document: doc });
});

// Get all documents for the authenticated user
router.get('/my', auth, async (req, res) => {
  const docs = await Document.findByUser(req.user.id);
  res.json({ documents: docs });
});

module.exports = router;
