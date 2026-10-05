import express from 'express'


export const user_routes = express.Router()

user_routes.get('/a', (req, res) => { res.send("user") })