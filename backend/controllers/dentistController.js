const Dentist=require("../models/Dentist");
const {uploadImageToCloudinary}=require("../utils/imageUploader")

exports.getDentists = async(req,res)=>{
     try{
        const allDentists=await Dentist.find();

        res.status(200).json({
            success:true,
            data: allDentists
        })
     }
     catch(e){
        res.status(404).json({
            success:false,
            error:e.message,
        })
     }
}

exports.createDentist = async(req,res)=>{
    try{
       let {name,
            qualification,
            years_of_experience,
            clinic_name,
            address,
            location
        } = req.body;
       const file=req.files?.image;
       let image_url="";
       if(!name || 
          !qualification || 
          !years_of_experience ||
          !clinic_name || 
          !address || 
          !location
       ){
         res.status(400).json({
            success:false,
            message:"All fields are mandatory"
         })
       }
       if(file){
            const image = await uploadImageToCloudinary(
            file,
            process.env.FOLDER_NAME,
            1000,
            1000
        );
        image_url=image.secure_url;
       }
       const newDentist=await Dentist.create({
            image:image_url,
            name,
            qualification,
            years_of_experience,
            clinic_name,
            address,
            location
       });

       res.status(200).json({
        success:true,
        data: newDentist,
        message:"Dentist created successfully "
       })
    }
    catch(e){
        res.status(500).json({
            success:false,
            error:e.message
        })
    }
}




