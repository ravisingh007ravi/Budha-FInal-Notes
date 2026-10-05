import express from 'express'


export const admin_routes = express.Router()


admin_routes.get('/a',(req,res)=>{res.send("admin")})

