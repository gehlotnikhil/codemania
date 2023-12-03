const express = require("express")
const connect =  require("./db")
connect()

const app = express()
app.use(express.json())
app.use("/api/auth/",require("./router/auth"))
app.use("/api/question/",require("./router/question"))
app.use("/api/check/",require("./router/check"))

app.listen(3000,()=>{
    console.log("Server is Running at Port 3000")
})

