import express from "express";
import movieRoutes from "./routes/movieRoutes.js"
import {config} from 'dotenv'
import {connectDB, disconnectDB} from "./config/db.js"

config();
connectDB();

const app = express()

app.use("/movies", movieRoutes);
const PORT = 5001;


const server = app.listen(PORT, ()=>{
    console.log(`Server running on PORT ${PORT}`);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection: ", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception: ", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    });
});

process.on("SIGTERM",async  () => {
    console.error("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDB();
        process.exit(0);
    });
});



