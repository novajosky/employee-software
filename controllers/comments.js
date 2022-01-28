const Employee = require('../models/employee');

module.exports = {
  create,
  delete: deleteComment
};

function deleteComment(req, res) {
  Employee.findOne({'comments._id': req.params.id, 'comments.user': req.user._id})
  .then(function(employee) {
    if (!employee) return res.redirect('/employees');
    employee.comments.remove(req.params.id);
    return employee.save();
  })
  .then(function(employee) {
    res.redirect(`/employees/${employee._id}`);
  });
}

function create(req, res) {
  Employee.findById(req.params.id, function(err, employee) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    employee.comments.push(req.body);
    employee.save(function(err) {
      res.redirect(`/employees/${employee._id}`);
    });
  });
}