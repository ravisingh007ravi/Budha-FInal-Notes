import express from 'express'
import { user_routes } from './user_routes.js'
import { admin_routes } from './admin_routes.js'

export const routes = express.Router()

// global API 


routes.get('/test', (req, res) => { res.send("ok") })

// User Api
routes.use('/user', user_routes);

// Admin Api
routes.use('/admin', admin_routes);