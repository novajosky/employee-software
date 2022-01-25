const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inquirySchema = new Schema({
  approvedSoftware: {
    type: String
  },
  data: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);