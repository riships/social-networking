import express from "express";
import bodyParser from 'body-parser';
import { router as userRouter } from "./routes/user.routes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/api", userRouter)

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is running on http://localhost:3000`);
})