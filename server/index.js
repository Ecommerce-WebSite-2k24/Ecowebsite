const express = require('express')
const cors = require('cors')
const con=require('../database/index')
const User = require('../database/Models/User')
const PORT = 3000
const app = express()
const productRouter =require('../server/Routes/products')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.use("/api",productRouter)


app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})