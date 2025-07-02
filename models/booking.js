const pool = require('../db');

const Booking = {
  async create({ userId, lawyerId, date, status }) {
    const result = await pool.query(
      'INSERT INTO bookings (user_id, lawyer_id, date, status) VALUES ($1, $2, $3, $4) RETURNING *',
      [userId, lawyerId, date, status]
    );
    return result.rows[0];
  },
  async findByUser(userId) {
    const result = await pool.query('SELECT * FROM bookings WHERE user_id = $1', [userId]);
    return result.rows;
  },
};

module.exports = Booking;
