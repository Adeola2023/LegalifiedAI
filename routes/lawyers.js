const express = require('express');
const Booking = require('../models/booking');
const auth = require('../middleware/auth');
const router = express.Router();

// Book lawyer (auth required)
router.post('/book', auth, async (req, res) => {
  const { lawyerId, date, status } = req.body;
  const booking = await Booking.create({ userId: req.user.id, lawyerId, date, status });
  res.json({ booking });
});

// Get all bookings for the authenticated user
router.get('/my', auth, async (req, res) => {
  const bookings = await Booking.findByUser(req.user.id);
  res.json({ bookings });
});

module.exports = router;
