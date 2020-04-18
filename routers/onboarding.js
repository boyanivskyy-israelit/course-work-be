const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello from heroku on route /api/onboarding',
  });
});

router.get('/questions', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello there!',
  });
});

module.exports = router;
