const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

const port = process.env.PORT || 4000

app.get("/",(req,res) =>{
    res.send({Message :"Hi from server"})
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})