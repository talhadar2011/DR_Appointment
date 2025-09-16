import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
 {
    name: { type: String, required: true },
    email: { type: String, required: true },
    image:{type:String},
    specialization:{ type: String, required: true },
    age: { type: Number, required: true },
    yearsOfExperience: { type: Number, required: true },
    degrees: [{ type: String, required: true }],
    rating: { type: String, required: true },
    appointmentSlots:[{ type: String, }]
  }
)

const doctorModel= mongoose.model("doctor",doctorSchema)
export default doctorModel