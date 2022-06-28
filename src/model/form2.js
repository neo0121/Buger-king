const mongoose = require("mongoose")

const formsubmitschema = new mongoose.Schema({
    name1:{
        type:String,
        required: true,
        min : "2"
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    number:{
        type:Number,
        required: true,
        unique: true
    },
    textarea:{
        type:String,
        required: true,
        min:"4",
        max:"50"
    }


})

const formsubmit = new mongoose.model("formsubmit", formsubmitschema)
module.exports = formsubmit