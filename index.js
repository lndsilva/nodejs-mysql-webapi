require('dotenv').config()

const db = require("./db")

const express = require('express')
const app = express()
const port = process.env.port

app.use(express.json())

app.get('/', (req,res) => res.json({message: 'Funcionando'}))

//iniciando o servidor
app.listen(port)
console.log("API funcionando")

app.get('/clientes', async(req, res)=>{
    const results = await db.selectCustomers();
    res.json(results)
})