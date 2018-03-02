// express framework
const express = require( 'express' );

// manager of routes
const router = express.Router(); 

// User schema from mnongoose 
const User = require( '../schemas/user' );

// retrieving users
router.get( '/users', ( req, res, next )=> { 
    User.find( function( err, users ){
        res.json( users );
    } ) } );
    
    // add user
    router.post( '/contact', ( req, res, next )=> {
        let newContact = new Contact( {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        phone: req.body.phone
    } );
    
    newContact.save( (err, contact)=>{
        if( err ) {
            res.json( { msg: 'Failed to add contact' } );
        }
        else{ res.json( { msg: 'Added contact succesfully' } ) }
    } );

} );

//delete contact
router.delete( '/contact/:id', (req, res, next)=> {
    Contact.remove( { _id: req.params.id }, function( err, result ){ 
        if( err ){
            re.json( err );
        }
        else{ res.json( result ); }
     } );
} );

module.exports = router; 

