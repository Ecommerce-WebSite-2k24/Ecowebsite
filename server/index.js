const express = require('express')
const cors = require('cors')
const con=require('../database/index')
// const User = require('../database/Models/User')
const PORT = 3000
const app = express()
const productRouter =require('../server/Routes/products')

const clientRouter=require('../server/Routes/ClientRoute')

const categoryRouter=require('../server/Routes/Category')
const authrouter=require('./Routes/authRoute')
const ImageRouter=require('../server/Routes/ImgRoute')
const cartRouter=require('./Routes/cartRoute')
const wishrouter=require('./Routes/wishRoute')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + "/public"))

app.use("/api",productRouter)

app.use("/user", clientRouter)

app.use("/auth",authrouter)

app.use('/category',categoryRouter)

app.use('/img',ImageRouter)

app.use("/fav",wishrouter)

app.use('/cart', cartRouter)

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})