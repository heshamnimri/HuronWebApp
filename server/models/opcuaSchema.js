const mongoose = require('mongoose');

//process Schema
const Schema = mongoose.Schema

const dataSchema = new Schema({
  time:       Number,
  current:    Number, 
  position:   Number
})

const opcuaSchema = new Schema({
  axis: String,						//grouped data by axis  
  data: [dataSchema]
})

const opcuaData = mongoose.model('realdata', opcuaSchema) //compiles opcuaschema into realdata collection 

module.exports = opcuaData