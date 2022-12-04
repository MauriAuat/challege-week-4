const mongoose = require('mongoose');

require('dotenv').config();


const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
}).then(() =>console.log('DB connection succesful!'));



const port = process.env.PORT;
app.listen(port,()=>{
   

    console.log(`App running on the port ${port}`)
})
