require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req, res)=>{
    res.send('get started with backend')
})
app.get('/login',(req, res)=>{
    res.send('login page')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>watch videos on youtube</h1')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})