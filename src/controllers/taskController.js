const { castObject, findById } = require('../models/taskModel');
const taskModel = require('../models/taskModel');



exports.getTask =  (req,res)=>{
    try{
        //I couldn't use async await in this block of code
        taskModel.find({},(err,data)=>{
            res.render('../views/index.ejs',{task:data})
        })
        

    }catch(err){
        console.log(`Este error ${err}`)
    }
};

exports.createTask = async(req, res)=>{
    
    try {
        newTask = await taskModel.create(req.body);
        
        res.status(201).redirect('/');

    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
    
}

exports.deleteTask = async(req,res)=>{
    try{
        await taskModel.findByIdAndDelete(req.params.id)
    }catch(err){
        console.log(err)
    }
    res.redirect('/');
}
exports.updateStatus = (req,res)=>{
    

        //I couldnt use findByIdAndUpdate because the req.body gives me an [object Object]
 
        let id = req.params.id;
        taskModel.findById(id,(err,task)=>{
            if (err) throw err;
            task.status = !task.status;
            task.save().then(()=> res.redirect('/')
            )
        })
 
}