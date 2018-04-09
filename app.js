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

// http request logger middleware
var morgan = require('morgan');

// management files mongoose 
var gridfs = require( 'mongoose-gridfs' );

// module to gridfs
var fs = require('fs');

/* 
creating a database called beatsapp
*/
mongoose.connect( 'mongodb://localhost:27017/beatsapp' );

// User schema from mnongoose 
const User = require('./schemas/user');

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @ 27017');
    //instantiate mongoose-gridfs
    var gridfs = require('mongoose-gridfs')({
        collection: 'avatar',
        model: 'avatarModel',
        mongooseConnection: mongoose.connection
    });

    //obtain a model
    Attachment = gridfs.model;

    // create or save a file
   /*  Attachment.write({
        filename:'arbol.jpg', 
        contentType:'image'
        }, 
        fs.createReadStream('./assets/arbol.jpg'), 
        function(error, createdFile){
          if( error )
          console.log('occurs an error adding file', error);
          if( createdFile )
          console.log('it has been created');
          
      }  ) ; */

/*       console.log( mongoose.modelNames()[0]);
 */      

      // to read a file
   /*     Attachment.readById('5aae98f7c6384856045400bb', function(error, content){
           if(error) {
               console.log('error al obtener el archivo');
               
           }

           if(content) {
               console.log('se encontro el archivo' , content);
               
           }
        
      })  */
});



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

app.use(morgan('combined'));

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
