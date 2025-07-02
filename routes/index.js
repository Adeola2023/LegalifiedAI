const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'LegalifiedAI API Root' });
});

module.exports = router;
