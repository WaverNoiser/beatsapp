/*
 *************************************** 
 |                                     |
 |              Back-end               |

 ***************************************               

*/

// framework to Node.js
var express = require( 'express' );

// http request logger middleware
var morgan = require('morgan');

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

app.use(morgan('short'));

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