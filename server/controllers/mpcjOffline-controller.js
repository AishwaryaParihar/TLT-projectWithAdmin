// controllers/contactController.js
const MPCJOfflineFormdetails = require('../models/mpcj');

const mpcjOfflineformdata = async (req, res) => {
  try {
    const contact = new MPCJOfflineFormdetails(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { mpcjOfflineformdata };
