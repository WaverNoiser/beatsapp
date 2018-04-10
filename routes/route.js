// express framework
const express = require('express');

// manager of routes
const router = express.Router();

// User schema from mnongoose 
const User = require('../schemas/user');

// module to gridfs
var fs = require('fs');

//instantiate mongoose-gridfs
var gridfs = require('mongoose-gridfs')({
    collection: 'avatar',
    model: 'avatarModel',
    mongooseConnection: mongoose.connection
});

// retrieving users
router.get('/users', (req, res, next) => {
    User.find(function (err, users) {
        res.json(users);
        res.err.json('error al buscar los usuarios')
    })
});

// retrieving an specified user
router.get('/user/:id', (req, res, next) => {
    User.find({ nickName: req.params.id }, function (err, users) {
        res.json(users);
    })
});

router.put(
    '/user/updateImageProf', (req, res, next) => {
        //obtain a model
    Attachment = gridfs.model;

        Attachment.write({
            filename: 'imageUserProfile',
            contentType: 'image'
        },
            fs.createReadStream('./assets/arbol.jpg'),
            function (error, createdFile) {
                if (error)
                    console.log('occurs an error adding file', error);
                if (createdFile)
                    console.log('it has been created');

            });

            console.log('atach?', Attachment);
            
    }
);

// add user
router.post('/user', (req, res, next) => {
    let newUser = new User({
        nickName: req.body.nickName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((err, user) => {
        if (err) {
            res.status(200).json(err);
            /* res.json( {msg: err }); */
        }
        else {
            res.status(201);
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

