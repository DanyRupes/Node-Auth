const mongoose = require('mongoose')
const Schema = mongoose.Schema


const galItem = new Schema({
     gallId:String,name:String, url:String
})

module.exports = GallaryItem = mongoose.model('gallary_item', galItem)