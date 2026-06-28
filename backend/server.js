require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Route Hooks
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Establish DB Connection
connectDB();

// Global Middlewares
app.use(cors({ origin: '*' })); // Customize for specific client domains in production
app.use(express.json());

// Main Structural Routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Fault Exception' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[Luxe Server] Operating securely on port ${PORT}`));