import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: String, required: true },
});

const Data = mongoose.model("Data", employeeSchema, "DoctorData");

export default Data;
