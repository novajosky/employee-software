const Inquiry = require('../models/inquiries');

module.exports = {
    new: String,
    create,
    index
};

function index(req, res) {
    Inquiry.find({})
        .then(function (inquiries) {
            console.log(inquiries);
            res.render('inquiries/index', {type: 'string', inquiries});
        });
}

function create(req, res) {
    let inquiry = new Inquiry(req.body);
    inquiry.save(function (err) {
        if (err) return res.render('/inquiries/index');
        res.redirect('/inquiries/index');
    });
    
}