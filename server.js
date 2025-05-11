const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
<<<<<<< HEAD
const session = require('express-session');
const mongoose = require('mongoose');

const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const apiRoutes = require('./api/apiRoutes');

const app = express();
const PORT = 8080;
=======
const mongoose = require('mongoose');

const app = express();
const PORT = 8080;

const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
>>>>>>> ba5763501ff024d531eb1c8eaffe4f99ef44b140

// MongoDB connection
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/Reservation', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}
main();

<<<<<<< HEAD
// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
=======
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
>>>>>>> ba5763501ff024d531eb1c8eaffe4f99ef44b140
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));
app.use(cookieParser());
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
app.use(session({
  secret: 'your-secret-key', // Replace with environment variable in production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Use true if using HTTPS
}));

// Attach username globally to all views
app.use((req, res, next) => {
  res.locals.username = req.session?.user?.username || null;
  next();
});

// Custom logger middleware
app.use(logger);
=======

app.use(express.static(path.join(__dirname, 'public')));

// Define the routes for rendering views
app.get('/', (req, res) => {
  res.render('index', { showAuthLinks: true }); // Pass the showAuthLinks variable to index.ejs
});

app.get('/breakfast', (req, res) => {
  res.render('breakfast', { showAuthLinks: true }); // Pass showAuthLinks to breakfast.ejs
});

app.get('/appetiser', (req, res) => {
  res.render('appetiser', { showAuthLinks: true }); // Pass showAuthLinks to appetiser.ejs
});

app.get('/beverage', (req, res) => {
  res.render('beverage', { showAuthLinks: true }); // Pass showAuthLinks to beverage.ejs
});

// API Routes
const apiRoutes = require('./api/apiRoutes');
app.use('/', apiRoutes);

// 404 route
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
  next();
});

// Error handler middleware
app.use(errorHandler);
>>>>>>> ba5763501ff024d531eb1c8eaffe4f99ef44b140

// Static view routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/breakfast', (req, res) => {
  res.render('breakfast');
});

app.get('/appetiser', (req, res) => {
  res.render('appetiser');
});

app.get('/beverage', (req, res) => {
  res.render('beverage');
});

// API routes
app.use('/', apiRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { message: 'Page Not Found' });
});

// Global error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`🚀 Server running at http://localhost:${PORT}`);
=======
  console.log(`Server is running at http://localhost:${PORT}`);
>>>>>>> ba5763501ff024d531eb1c8eaffe4f99ef44b140
});
