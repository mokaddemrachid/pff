const express = require("express")
const cors = require('cors')
const port = 7000

const {postRouter} = require('./server/routers/postRouter')
const {userRouter} = require("./server/routers/userRouter")

const app = express()

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    optionsSuccessStatus:200
}))

const connectDB = require('./server/configurationDB/config')
connectDB()

app.use(express.json())
app.use('/', postRouter)
app.use('/', userRouter)

app.listen(port, () => {
    console.log("server run")
})