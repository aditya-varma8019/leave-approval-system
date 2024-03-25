import dotenv from 'dotenv';
import express from 'express';
import { dbConnect } from './configs/database.config.js';
import cors from 'cors';

dotenv.config();

// dbConnect();

const app = express();
app.use(express.json());
app.use(cors()); // <-- Call the cors middleware function

app.get("/", (req, res) => {
    console.log("Server is running");
    res.send("Server is running");
});

// app.use("/api/users", userRouter);

const port = 5000;

app.listen(port, () => {
    console.log(`Server started at http://localhost:` + port);
});
