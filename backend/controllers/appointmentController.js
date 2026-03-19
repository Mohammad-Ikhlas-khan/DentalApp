const Appointments=require("../models/Appointment");
const Dentist=require("../models/Dentist");

exports.getAppointments = async(req,res)=>{
    try{
       const appointments = await Appointments.find();
       const populatedAppointments = await Dentist.populate(appointments, { path: 'dentist' });
       res.status(200).json({
        success:true,
        data: populatedAppointments
       })
    }
    catch(e){
        res.status(400).json({
          success:false,
          error:e.message
        })
    }
}

exports.createAppointment = async(req,res)=>{
    try{
       let {
          patient_name,
          age,
          gender,
          appointment_date,
          dentistId
       } = req.body;

       if(!patient_name ||
        !age ||
        !gender ||
        !appointment_date ||
        !dentistId
       ){
        res.status(400).json({
            success:false,
            message:"All fields are mandatory"
        });
       }
       const selectedDate = new Date(appointment_date);
       selectedDate.setHours(0, 0, 0, 0);
       const currentDate = new Date();
       currentDate.setHours(0, 0, 0, 0);
       if(selectedDate < currentDate){
        return res.status(400).json({
            success:false,
            message:"Appointment date must be in the future"
        });
       }
       if(age < 0){
        return res.status(400).json({
            success:false,
            message:"Age must be a positive number"
        });
       }
       const newAppointment= await Appointments.create({
          patient_name,
          age,
          gender,
          appointment_date,
          dentist:dentistId
       }
       );

       await Dentist.findByIdAndUpdate(
        {
            _id:dentistId
        },
        {$push:{
             appointments:newAppointment._id
            },
        },
        {new:true}
       );
        res.status(200).json({
            success:true,
            data: newAppointment,
            message: "Appointment created successfully."
        })
    }
    catch(e){
        res.status(500).json({
            success: false,
            error: e.message
        })
    }
}