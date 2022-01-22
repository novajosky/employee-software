const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const softwareSchema = new Schema({
  name: {type: String, required: true, unique: true},
  purchased: Date
}, {
  timestamps: true
});

module.exports = mongoose.model('Viewemp', softwareSchema);