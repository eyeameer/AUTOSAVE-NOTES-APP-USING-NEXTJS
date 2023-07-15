const mongoose = require('mongoose');
// defining schema (structure) of the collection
const dataSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    notesArray:[
        {
            id:String,
            noteContent:String,
        }
    ],
    
});

const Note =mongoose.models.Note || mongoose.model('Note', dataSchema,'notes');

module.exports = Note;