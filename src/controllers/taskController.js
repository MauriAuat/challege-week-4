const taskModel = require('../models/taskModel');

exports.getTask = (req,res)=>{
    res.render('../views/index.ejs',{task:[{title:" la casa de pipo",status:true}]})
};

exports.createTask = async(req, res)=>{
    
    try {
        newTask = await taskModel.create(req.body);
        console.log(`cuerpo de la solicitud: ${newTask}`)
        res.status(201).json({
                message:"success",
                data: {
                    task: newTask
                }
            }); 
    } catch (err) {
        console.log(err)
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}