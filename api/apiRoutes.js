const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const User = require('../models/User');
const Contact = require('../models/Contact');

function requireAuth(req, res, next) {
  if (!req.session?.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

router.post('/auth/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: { username: newUser.username }
    });
  } catch (err) {
    next(err);
  }
});

router.post('/auth/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.session.user = { userId: user._id, username: user.username };
    res.json({ message: 'Login successful', user: req.session.user });
  } catch (err) {
    next(err);
  }
});

router.post('/auth/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) return next(err);
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out successfully' });
  });
});

router.get('/auth/me', (req, res) => {
  if (!req.session?.user) {
    return res.json({ isAuthenticated: false, user: null });
  }

  res.json({ isAuthenticated: true, user: req.session.user });
});

router.get('/reservations', requireAuth, async (req, res, next) => {
  try {
    const reservations = await Reservation.find()
      .sort({ createdAt: -1 })
      .limit(50);
    res.json({ reservations });
  } catch (err) {
    next(err);
  }
});

router.post('/reservations', requireAuth, async (req, res, next) => {
  try {
    const { restaurantId, name, email, phone, date, time, guests, special_requests } = req.body;

    const reservation = new Reservation({
      restaurantId,
      name,
      email,
      phone,
      date,
      time,
      guests,
      special_requests
    });

    await reservation.save();
    res.status(201).json({ message: 'Reservation created', reservation });
  } catch (err) {
    next(err);
  }
});

router.post('/contact', async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    const contact = new Contact({
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    });

    await contact.save();
    res.status(201).json({ message: 'Contact request submitted' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
