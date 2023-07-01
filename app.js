import dotenv from "dotenv";
import express from 'express';
import connectToDb from "./config/db.js";
import cors from 'cors'

dotenv.config()


const app = express(); //started server
connectToDb(); // connected to DataBase

import userRoutes from './routes/userRoutes.js'

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/', userRoutes)

export default app