import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { route } from './routes/routes.js'

const app = express()
const port = 6060

app.use('/',route)

app.listen(port, () => console.log(`Server is Running port ${port}`))

