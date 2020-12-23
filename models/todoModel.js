const mongoose = require('mongoose');

//todo list schema, Blueprint for data
const todoSchema = new mongoose.Schema({
    item: { type: String }
});

//todo model, based on above schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;