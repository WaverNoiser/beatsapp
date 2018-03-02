/*
 *************************************** 
 |                                     |
 |              Back-end               |

 ***************************************               

*/

// framework to Node.js
var express = require( 'express' );

// framework to MongoDB
var mongoose = require( 'mongoose' );

/* 
creating a database called beatsapp
*/
mongoose.connect( 'mongodb://localhost:27017/beatsapp' );

//on connection
mongoose.connection.on( 'connected', ()=>{
    console.log('connected to database mongodb @ 27017');
} );

// if there is an error on connection
mongoose.connection.on( 'error', (err)=>{
    if( err ) {
        console.log('Error in database connection: ', err);
    }
} );

/* 
Node.js body parsing middleware.
*/
var bodyParser = require( 'body-parser' );

/* 
El Intercambio de Recursos de Origen Cruzado ( Cross-Origin Resource Sharing ) 
*/
var cors =  require( 'cors' );

/* 
The path module provides utilities for working with file and directory paths.
*/
var path = require( 'path' );

/* 
create an app express
*/
var app = express();

// ading middleware ( cors ) to app 
app.use( cors() );

// body-parser
app.use( bodyParser.json() );

// static files 
app.use( express.static( path.join( __dirname, 'public' ) ) );

/* 
importing route
*/
const route = require( './routes/route' );

// api REST
app.use( route );

// testing server
app.get( '/', ( req, res )=> { res.send( 'foobar' ) } );


// setting a port
const port = 3000;

// listenning in server
app.listen( port, ()=>{
    console.log( 'server started: ', port );
} );