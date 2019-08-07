const mongoose = require('mongoose')
const Schema = mongoose.Schema


const gallary = new Schema({
    _id:String,user:String,gallId:String
})

module.exports = Gallary = mongoose.model('gallary', gallary)