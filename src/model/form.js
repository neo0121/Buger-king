const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
date:{
    type:Date,
    required:true,
},
time:{
    type:String,
    required:true,
},
numberofpeople:{
    type:Number,
    required:true,
}
})

const reservationForm = new mongoose.model("reservationForm",reservationSchema )
module.exports = reservationForm;