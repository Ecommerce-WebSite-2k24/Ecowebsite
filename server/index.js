const express = require('express')
const cors = require('cors')
const con=require('../database/index')
// const User = require('../database/Models/User')
const PORT = 3000
const app = express()
const productRouter =require('../server/Routes/products')

const clientRouter=require('../server/Routes/ClientRoute')


const authrouter=require('./Routes/authRoute')



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.use("/api",productRouter)

app.use("/client", clientRouter)

app.use("/auth",authrouter)


app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})