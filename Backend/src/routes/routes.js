import express from 'express';
import { testAPI, testAPI2 } from '../controller/user_controller.js'
export const route = express.Router()


route.get('/a', testAPI)
route.get('/b', testAPI2)

// CRUD
// create => post
// Read => get
// Update => put
// delete => delete