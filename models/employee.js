const mongoose = require('mongoose');

// shortcut variable
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    employeeId: {
        type: Number,
        required: true
    },
    department: String,
    requiredSoftware: [String],
    fullTimeEmployee: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Employee', employeeSchema);

