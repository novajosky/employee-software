const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const softwareSchema = new Schema({
  approvedSoftware: {
      type: String, 
      required: true, 
      unique: true
  },
  purchased: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Software', softwareSchema);