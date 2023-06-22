const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    age:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('Users',formSchema);