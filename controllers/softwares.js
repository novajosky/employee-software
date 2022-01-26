const Software = require('../models/software');
const Employee = require('../models/employee');

module.exports = {
  new: newSoftware,
  create,
  addToApprovedSoftware,
  delete: deleteSoftware,
  index
};


function index(req, res) {
  Software.find({}, function(err, softwares) {
    console.log(softwares);
      res.render('softwares/new', { softwares });
  });
}

function deleteSoftware(req, res) {
  Employee.findOneAndDelete(
      { _id: req.params.id }, function (err) {
          res.redirect('/softwares');
      }
  );
}

function addToApprovedSoftware(req, res) {
  Employee.findById(req.params.employeeId, function(err, employee) {
    employee.approvedSoftware.push(req.body.softwareId);
    employee.save(function(err) {
      res.redirect(`/employees/${employee._id}`);
    });
  });
}

function create(req, res) {
  //onst s = req.body.purchased;
  //req.body.purchased = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;

  const newSoftware = new Software(req.body);
  // console.log("THIS IS THE SOFTWARE MODEL", newSoftware);
  console.log(newSoftware);
  newSoftware.save(function(err) {
    // if(err) return res.render('softwares/new');
    if(err) {
      console.log(err);
    }
    res.redirect('/softwares/new');
  })
  // Software.create(req.body, function (err, software) {
  //   res.redirect('/softwares/new');
  // });
}

function newSoftware(req, res) {
  Software.find({})
  .sort('name')
  .exec(function (err, softwares) {
    res.render('softwares/new', {
      name: 'Add Software',
      softwares
    });
  });
}