// framework to MongoDB
var mongoose = require('mongoose');

/* 
creating a database called beatsapp
*/
mongoose.connect('mongodb://localhost:27017/beatsapp');

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


