const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inquirySchema = new Schema({
  type: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);