// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { mpcjOfflineformdata } = require('../controllers/mpcjOffline-controller');

router.post('/contact', createContact);

module.exports = router;
