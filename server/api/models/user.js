const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    password:String,
    date_create:{ type: Date, default: Date.now },

})
module.exports = mongoose.model('users', userSchema);