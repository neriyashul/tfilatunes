const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.json("hi")    
})

const PORT = 5000;
app.listen(PORT, () => { console.log("Server listening on PORT", PORT) });