import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/product_routes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use("/api/v1", router);

mongoose.connect('mongodb+srv://vrushabhde:vrushabhdeMDB@cluster0.41dmrwv.mongodb.net/interview_taskDB?retryWrites=true&w=majority')

.then(() => console.log("DB connected"))
.catch((err) => console.log("DB error =>", err))

app.listen(5002 );