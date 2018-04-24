// framework to MongoDB
var mongoose = require('mongoose');

const f = require('util').format;

const assert = require('assert');

const userAdmin = encodeURIComponent('beatsAppUser');
const password = encodeURIComponent('beatsAppUser');
const authMechanism = 'DEFAULT';

// Connection URL
const url = f('mongodb://%s:%s@localhost:27017/beatsapp?authMechanism=%s',
userAdmin, password, authMechanism);


/* 
creating a database called beatsapp
*/

mongoose.connect(url).then(
    conected => {
        console.log( 'Ha ingresado correctamente: ' + userAdmin );
        
    },
    fail => {
        console.log('no se conecto: ' + fail);
        
    }
); 

//on connection
mongoose.connection.on('connected', () => {
    console.log('connected to database mongodb @ 27017');
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

module.exports = mongoose;


