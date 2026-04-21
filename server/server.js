const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const adminRoutes = require('./routes/adminRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/admin', adminRoutes);
app.use('/api/products', productRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

// Database Connection
if (process.env.MONGO_URI && process.env.MONGO_URI !== 'your_mongodb_connection_string_here') {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.error('MongoDB Connection Error:', err));
} else {
  console.log('Skipping MongoDB connection: Please set MONGO_URI in .env');
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
