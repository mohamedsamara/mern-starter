const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// Task Schema
const TaskSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = Mongoose.model('Task', TaskSchema);
