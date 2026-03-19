const express=require("express")
const router=express.Router();

const {getAppointments,createAppointment}=require("../controllers/appointmentController");
const { auth,isAdmin } = require("../middlewares/auth");
router.post("/addAppointment",createAppointment);
router.get("/appointments",auth,isAdmin,getAppointments);

module.exports=router;