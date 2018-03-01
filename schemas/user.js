// importing mongoose framework
const mongoose = require( 'mongoose' );

// creating a schema
const UserSchema = mongoose.Schema( {
    first_name:{
        type: String,
        require: true
    },
    last_name:{
        type: String,
        require: true
    },
    
    phone:{
        type: String,
        require: true
    }
} );

// exporting to use in another file
const User = module.exports = mongoose.model( 'User', UserSchema );