import express from 'express';
import { appRouter } from './routes';
import { connectToDatabase } from './db/connection';
import { errorHandler } from './middleware/errorMiddleware';
import dotenv from 'dotenv';
import cors from "cors";

const app = express();
app.use(express.json());
app.use(errorHandler)
app.use(cors({origin: "http://localhost:5173", credentials: true})); 

dotenv.config();  // so that we can use process.env to access environment variables

app.use("/api", appRouter);

const PORT = 5001;
connectToDatabase()
.then(() => {
    app.listen(PORT, () =>
    console.log("Server is running on port " + PORT));
})