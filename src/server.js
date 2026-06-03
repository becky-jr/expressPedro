
// const express = require('express'); 
// as in "type: module;" I am using import instead of require
// const router = require('./routes');  // ← получаем то, что было в module.exports
// app.use('/api', router); this would be in common js

import express from "express"
import {config} from "dotenv"
import {connectDB, disconnectDB} from './config/db.js'

// import routes 
import movieRoutes from './routes/movieRoutes.js'

config()
connectDB()

const app = express(); 


// const users = [
//     {
//         id: 1,
//         name: 'Jacky'
//     },
//     {
//         id: 2,
//         name: 'Becky'
//     }
// ]


// app.get('/data', (req, res) => {
//     res.json(users)
// })


// API routes

app.use("/movies", movieRoutes)

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}/`);
})


// GET, POST, PUT, DELETE

// AUTH - sign in, sign up
// MOVIE - GETTING ALL MOVIES
// USERS - Profile
// WATCHLIST - adding, deleting 