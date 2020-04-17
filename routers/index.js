const express = require('express');
const router = express.Router();
const authRoutes = require('./user');

router.use('/auth', authRoutes);
router.all('*', (req, res) => {
  res
    .status(404)
    .json({ success: false, message: "Fatal 404, there isn't such a page" });
});

module.exports = router;
