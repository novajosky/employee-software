const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    department: String,
    approvedSoftware: [String],
    purchased: Date,
    fullTimeEmployee: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Employee', employeeSchema);

