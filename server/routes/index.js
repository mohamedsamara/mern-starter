const express = require('express');
const router = express.Router();

// Bring in Models
const Task = require('../models/task');

// get all tasks api
router.get('/tasks', (req, res) => {
  Task.find()
    .exec()
    .then(task => res.json(task))
    .catch(err => next(err));
});

router.post('/task/add', (req, res, next) => {
  const task = new Task({
    name: req.body.name,
    description: req.body.description
  });
  task
    .save()
    .then(() => res.json(task))
    .catch(err => next(err));
});

router.delete('/task/delete/:id', (req, res, next) => {
  Task.deleteOne({ _id: req.params.id })
    .exec()
    .then(task => res.json())
    .catch(err => next(err));
});

module.exports = router;
