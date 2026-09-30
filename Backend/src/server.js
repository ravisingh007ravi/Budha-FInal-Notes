import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import expresslimit from 'express-rate-limit';
import dotenv from 'dotenv';

// morgon npm

const app = express()
const port = 6060;

app.use(cors())
app.use(express.json())

const limiter = expresslimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100, 
	standardHeaders: 'draft-8',
	legacyHeaders: false, 
	ipv6Subnet: 56, 
})
app.use(limiter)


mongoose.connect('')
.then(()=>console.log('Mongodb Connected..'))
.catch((e)=>console.log(e.message))


app.listen(port,()=>console.log(`Server is Running port ${port}`))