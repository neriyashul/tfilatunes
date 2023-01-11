const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.json({"hi": 1})
})

module.exports = app;