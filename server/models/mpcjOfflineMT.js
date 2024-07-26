// models/ContactForm.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mpcjOfflineMTFormSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  purchasedProduct: {
    type: String,
    required: true,
  },
});

const MPCJOfflineFormdetails = mongoose.model('MPCJOfflineFormdetails', mpcjOfflineMTFormSchema);

module.exports = MPCJOfflineFormdetails;
