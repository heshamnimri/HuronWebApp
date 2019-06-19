const mongoose = require('mongoose');

//process Schema
const Schema = mongoose.Schema

const dataSchema = new Schema({
  time:       String,
  current:    Number, 
  position:   String
})

const opcuaSchema = new Schema({
  Axis: String,
  data: [dataSchema]

}, {collection:"realData"})


module.exports = opcuaSchema
