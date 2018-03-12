// importing mongoose framework
const mongoose = require( 'mongoose' );

// creating a schema
const UserSchema = mongoose.Schema( {
    nickName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true
    },
    date: { type: Date, default: Date.now },
} );

 

// exporting to use in another file
const User = module.exports = mongoose.model( 'User', UserSchema );