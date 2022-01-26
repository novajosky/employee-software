const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// shortcut variable
const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    department: String,
    approvedSoftware: [{
        type: Schema.Types.ObjectId,
        ref: "Software"
    }],
    startDate: Date,
    fullTimeEmployee: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Employee', employeeSchema);

