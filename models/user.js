const pool = require('../db');
const bcrypt = require('bcrypt');

const User = {
  async create({ name, email, password, role, language }) {
    const passwordHash = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (name, email, password_hash, role, language) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, passwordHash, role, language]
    );
    return result.rows[0];
  },
  async findByEmail(email) {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  },
  async verifyPassword(user, password) {
    return bcrypt.compare(password, user.password_hash);
  },
};

module.exports = User;
