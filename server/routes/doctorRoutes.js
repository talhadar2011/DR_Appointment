import { Router } from "express";
import { addDoctor,getDoctors } from "../controllers/doctorController.js";
const doctorRouter=Router();
doctorRouter.get("/getDoctors",getDoctors)

doctorRouter.post("/addDoctor",addDoctor)

export default doctorRouter;