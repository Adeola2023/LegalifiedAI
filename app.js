require('dotenv').config();
const express = require('express');
const cors = require('cors');

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const documentRoutes = require('./routes/documents');
const lawyerRoutes = require('./routes/lawyers');
const selfrepRoutes = require('./routes/selfrep');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', indexRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/lawyers', lawyerRoutes);
app.use('/api/selfrep', selfrepRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
