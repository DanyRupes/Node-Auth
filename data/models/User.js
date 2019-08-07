const mongoose = require('mongoose')
const Schema = mongoose.Schema


const user = new Schema({
    email: {type:String},_id:{type:String}
    // password:{type:String},
})

module.exports = User = mongoose.model('users', user)