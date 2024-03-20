import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import { router } from "../routes/allroutes.js";

dotenv.config()

const app = express();
app.use(express.json())
app.use(router)

const mongoUri= process.env.MONGO_URI

try {
    await mongoose.connect(mongoUri)
    {console.log('Database Connected')}
} catch (error) {
    console.log(error)  
}


const port = process.env.PORT || 6000

app.listen(port, ()=> {
    console.log( `App is running on ${port}`) 
})