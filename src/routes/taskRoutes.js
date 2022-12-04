const express = require('express');
const app = require('../../app');
const router = express.Router();

const taskController = require('../controllers/taskController');

router
.route('/')
.get(taskController.getTask)
.post(taskController.createTask);

module.exports =router;