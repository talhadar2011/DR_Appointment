import { Router } from "express";
import { addDoctor,getDoctors,getDoctorById } from "../controllers/doctorController.js";
const doctorRouter=Router();
doctorRouter.get("/getDoctors",getDoctors)
doctorRouter.get("/getDoctor/:id",getDoctorById)
doctorRouter.post("/addDoctor",addDoctor)

export default doctorRouter;