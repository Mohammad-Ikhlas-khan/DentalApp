const express=require('express');
const cors=require('cors');
const cookieParser=require("cookie-parser");
const fileupload=require("express-fileupload");
const db=require("./config/database")
const { cloudinaryConnect } = require("./service/cloudinary")
const dentistRoutes=require("./routes/dentistRoutes");
const appointmentRoutes=require("./routes/appointmentRoutes")
const authRoutes=require("./routes/auth");
const dotenv=require("dotenv");

dotenv.config();

const PORT=process.env.PORT || 4000;

db.connect();

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
		origin: "*",
	}));

app.use(fileupload({
    useTempFiles: true,
	tempFileDir: "/tmp/",
}));

cloudinaryConnect();

app.use("/api/v1",authRoutes);
app.use("/api/v1",dentistRoutes);
app.use("/api/v1",appointmentRoutes);


// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});