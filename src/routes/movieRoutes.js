// const express = require('express')

import express from "express"

const router = express.Router()

const movies = [
    {
        id: 1,
        movie: 'Iron Man'
    },
    {
        id: 2,
        movie: 'The Incredible Hulk'
    },
    {
        id: 3,
        movie: 'Iron Man 2'
    },
    {
        id: 4,
        movie: 'Thor'
    },
    {
        id: 5,
        movie: 'Captain America: The First Avenger'
    },
]

router.get('/hello', (req, res) => {
    res.json(movies)
})


router.get('/', (req, res) => {
    res.json({httpMethod: "get"})
})

router.post('/', (req, res) => {
    res.json({httpMethod: "post"})
})





export default router
// module.exports = router;  this would be in commonjs