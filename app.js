const express = require ("express")

const app = express()

app.get('/', (req, res) =>{
    res.send("<h1>Home Page</h1>")
})

app.listen(5000, () => {
    console.log("Server is running in port 5000")
})
//http://localhost:5000