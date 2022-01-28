const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

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
    },
    comments: [commentSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Employee', employeeSchema);

