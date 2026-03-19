const mongoose=require("mongoose");

const denstistSchema=new mongoose.Schema({
   image:{
     type:String,
   },
   name:{
    type:String,
    required:true,
   },
   qualification:{
    type:String,
    required:true
   },
   years_of_experience:{
      type:Number,
      required:true
   },
   clinic_name:{
    type:String,
    required:true
   },
   address:{
    type:String,
    required:true
   },
   location:{
     type:String
   },
   appointments:[
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Appointments",
		},
	]
});

module.exports=mongoose.model("Dentist",denstistSchema)