const mongoose = require('mongoose');


const taskSchema= new mongoose.Schema({
    title: {
        type: String,
        required:[true, "A tour must have a name"],
        unique:true
    },
    
    description: {
        type: String,
        default: "None"
    },
    status: {
        type:Boolean,
        default: false
    }
});

 const Task = mongoose.model('Task', taskSchema);

 module.exports = Task;
