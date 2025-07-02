const express = require('express');
const router = express.Router();

// Stub: Get user dashboard data
router.get('/', (req, res) => {
  res.json({ cases: [], bookings: [], documents: [] });
});

module.exports = router;
