import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import expresslimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { routes } from './routes/index.js'

dotenv.config({ quiet: true })

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


mongoose.connect(process.env.ATlasURL)
	.then(() => console.log('Mongodb Connected..'))
	.catch((e) => console.log(e.message))

app.use('/api',routes)

app.listen(port, () => console.log(`Server is Running port ${port}`))   