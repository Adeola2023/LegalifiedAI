const pool = require('../db');

const Document = {
  async create({ userId, fileName, analysisResult }) {
    const result = await pool.query(
      'INSERT INTO documents (user_id, file_name, analysis_result) VALUES ($1, $2, $3) RETURNING *',
      [userId, fileName, analysisResult]
    );
    return result.rows[0];
  },
  async findByUser(userId) {
    const result = await pool.query('SELECT * FROM documents WHERE user_id = $1', [userId]);
    return result.rows;
  },
};

module.exports = Document;
