const express=require("express")
const router=express.Router();

const {createDentist,getDentists}=require("../controllers/dentistController");
const { auth,isAdmin } = require("../middlewares/auth");
router.post("/addDentist",auth,isAdmin,createDentist);
router.get("/dentists",getDentists);

module.exports=router;