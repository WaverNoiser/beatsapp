// framework to MongoDB
mongoose = require('mongoose');

// module to gridfs
var fs = require('fs');

/* 
creating a database called beatsapp
*/
mongoose.connect('mongodb://localhost:27017/beatsapp');

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

    //para escribir archivos
    /* Attachment.write({
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

module.exports = mongoose;


