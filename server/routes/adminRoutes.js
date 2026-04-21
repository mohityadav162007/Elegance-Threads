const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');
const Order = require('../models/Order');

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'default_admin_password';

// Login route
router.post('/login', (req, res) => {
  const { password } = req.body;
  
  if (password === ADMIN_PASSWORD) {
    const payload = { admin: { id: 'admin1' } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});

// Verify token
router.get('/verify', authMiddleware, (req, res) => {
  res.json({ valid: true });
});

// Get all orders
router.get('/orders', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Update order status
router.put('/orders/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
