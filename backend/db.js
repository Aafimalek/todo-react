const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Aafi%4012345@cluster0.nftuw2e.mongodb.net/todos");
const todoSchema = mongoose.Schema({
  title:  String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports = {
  todo
}