// express framework
const express = require('express');

// manager of routes
const router = express.Router();

// User schema from mnongoose 
const User = require('../schemas/user');

// retrieving users
router.get('/users', (req, res, next) => {
    User.find(function (err, users) {
        res.json(users);
    })
});

// retrieving an specified user
router.get('/user/:id', (req, res, next) => {
    User.find({ _id: req.params.id }, function (err, users) {
        res.json(users);
    })
});

// add user
router.post('/user', (req, res, next) => {
    console.log();
    
    let newUser = new User({
        nickName: req.body.nickName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((err, user) => {
        if (err) {
            console.log('error al agregar usuario:' + err);
            res.json({ msg: 'Failed to add user' });
        }
        else {
            console.log('se ha agregado el usuario');
            res.json({ msg: 'Added user succesfully' })
        }
    });

});

//delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            re.json(err);
        }
        else { res.json(result); }
    });
});

module.exports = router;

