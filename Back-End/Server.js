import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./Routes/ToDoRoutes.js";

dotenv.config();

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Listening at ${PORT}...`);
  });

app.use('/api',routes);
