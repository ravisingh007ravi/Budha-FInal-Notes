import express from 'express'
import { create_user, verify_otp, resend_otp, login } from '../controller/user_controller.js'

export const user_routes = express.Router()

user_routes.post('/create_user', create_user)
user_routes.post('/verify_otp', verify_otp)
user_routes.post('/resend_otp', resend_otp)
user_routes.post('/login', login)