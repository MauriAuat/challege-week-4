const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded())//it is deprecated but I needed for the post method otherwise the req.body came empty
app.use(express.json());
app.set('views', `${__dirname}/src/views`)
app.set('view engine','ejs');
const taskRouter = require('./src/routes/taskRoutes')




app.use('/',taskRouter);//with ejs I can't redirect from my post correctly whit this url '/api/v1/task' so I put the root path '/'

module.exports = app;