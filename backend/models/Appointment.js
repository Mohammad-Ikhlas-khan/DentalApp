const mongoose=require("mongoose");

const appointmentSchema=new mongoose.Schema({
    patient_name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
      type:String
    },
    appointment_date:{
        type:Date,
        default:Date.now
    },
    dentist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Dentist"
    }
});

module.exports=mongoose.model("Appointments",appointmentSchema);