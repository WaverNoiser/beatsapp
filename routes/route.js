// express framework
const express = require('express');

// manager of routes
const router = express.Router();

// User schema from mnongoose 
const User = require('../schemas/user');

// module to gridfs
var fs = require('fs');

var mongoServices = require('../mongo/mongo');


// retrieving users
router.get('/users', (req, res, next) => {
    User.find(function (err, users) {
        if( users ) { 
            res.json(users) }
        if( err ) { 
            console.log('err: ' + err);
            // res.json( err ) 
        }
    })
});

// retrieving an specified user
router.get('/user/:id', (req, res, next) => {
    User.find({ nickName: req.params.id }, function (err, users) {
        res.json(users);
    })
});


router.post(
    '/user/updateImageProf', (req, res, next) => {
        //instantiate mongoose-gridfs
        var gridfs = require('mongoose-gridfs')({
            collection: 'imageProfile',
            model: 'imageProfileModel',
            mongooseConnection: mongoServices.connection
        });

        console.log( 'body: ' +   req.body.image   );
        
        //obtain a model
        Attachment =  gridfs.model  ;

        try{
        //para escribir archivos
        Attachment.write({
            filename: 'imageUserProfile',
            contentType: 'image'
        },
            
            fs.readFile( req.body.image, 
            function (error, data){ 
                if (error) console.log( 'error reading file' + error );
                if (data) console.log( '\n file\' buffer:' + data );
             }
            ),
            function (error, createdFile) {
                function error ( error ){
                    console.log('error' + error );
                }
                function create ( createdFile ){
                    console.log('se creo el archivo');
                }

                error(error);
                create(createdFile);
            }
        );
        }catch(error){
            console.log( error );
            
        }
    }
);

// add user
router.post('/user', (req, res, next) => {
    let newUser = new User({
        nickName: req.body.nickName,
        email: req.body.email,
        password: req.body.password
    });

    try {
    newUser.save((err, user) => {
        if (err) {
            console.log('\nerror al agregar usuario: ' + err);
            
            res.status(200).json(err);
            /* res.json( {msg: err }); */
        }
        else {
            res.status(201);
            res.json({ msg: 'Added user succesfully' })
        }
    });
}catch(e){
    console.log('error on model.save()');
    
}

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

