import express from "express";
import expressAsyncHandler from "express-async-handler";
import Data from "../Models/DoctorModel.js";
const doctorRouter = express.Router();

doctorRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const data = await Data.find({});
    res.send(data);
  })
);

// export default doctorRouter;

// doctorRouter.get(
//   "/seed",
//   expressAsyncHandler(async (req, res) => {
//     // await Product.remove({});
//     const createdData = await Product.insertMany(data.Ddata);
//     res.send({ createdData });
//   })
// );

export default doctorRouter;
