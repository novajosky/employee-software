const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inquirySchema = new Schema({
  name: {
    type: String
  },
  data: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);