CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  lawyer_id INTEGER,
  date TIMESTAMP NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'pending'
);
