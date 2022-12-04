const express = require('express');
const app = require('../../app');
const router = express.Router();

const taskController = require('../controllers/taskController');

router
.route('/')
.get(taskController.getTask)
.post(taskController.createTask);

router
.route('/:id')
.get(taskController.deleteTask)

router
.route('/turn/:id')// I had problems with delete and update method in ejs so I couldn't follow the REST principles
.get(taskController.updateStatus)

module.exports =router;