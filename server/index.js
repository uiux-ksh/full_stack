import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/user.js';
//zneh8965
//mongodb+srv://uiuxksh:<password>@cluster0.jrn2o.mongodb.net/?retryWrites=true&w=majority
const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter); // http://localhost:5000/users/signup


const MONGODB_URL = "mongodb+srv://uiux-ksh:zneh8965@cluster0.ha3ln.mongodb.net/tour_db?retryWrites=true&w=majority"

const port = 5000;

mongoose
    .connect(MONGODB_URL).then(() => {
    app.listen(port,() => {
        console.log(`Server ${port}`);
    })
}).catch((err) => console.log(err));