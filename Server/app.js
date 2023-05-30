const express = require('express')
const cors = require('cors')
require('dotenv').config()

var app = express();

app.use(cors())
app.use(express.json())

const AuthRegisterUserRoutes = require('./routes/AuthRegisterUserRoutes')
const ProductsRouter = require('./routes/ProductsRoutes')

const port = process.env.PORT || 3000

app.use(AuthRegisterUserRoutes)
app.use('/products',ProductsRouter)

app.listen(port,()=>{
  console.log(`Servidor rodando na porta: ${port}`)
})

require("./database/connection")