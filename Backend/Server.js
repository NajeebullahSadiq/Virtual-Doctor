
import express from "express";
import cors from "cors"
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
import doctorRouter from "./Routers/DoctorRouter.js";
import mongoose from "mongoose";
import UserRouter from "./Routers/UserRouter.js"

// connect database
const mongoDB = "mongodb://127.0.0.1/VirtualDoctor";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/doctorData", doctorRouter);
app.use("/userData", UserRouter);

console.log(mongoose.connection.readyState);


const port = 7000;
//Response to a request
app.get("/", (req, res) => {
  res.send(`Server is running ${port}`);
});
//listen to port

app.listen(port, () => {
  console.log(`sever at http://localhost:${port}`);
});
