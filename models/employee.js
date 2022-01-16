const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: String,
    employeeId: Number,
    department: String,
    requiredSoftware: [String],
    fullTimeEmployee: Boolean,
});


module.exports = mongoose.model('Employee', employeeSchema);

