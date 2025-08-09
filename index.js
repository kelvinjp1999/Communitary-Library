import express from 'express'
const app = express()

app.use(express.json())

const users = []

// METHOD => GET,POST , PUT/PATH, DELETE
// NAME => / - SEMPRE NO PLURAL
// CALLBACK FUNCTIONS => ONDE EXECUTAMOS O BACKEND 

app.post("/users",(req,res) => {
  console.log(req)
  const body = req.body
  users.push(body)
  res.status(201).send("Usuario Criado com sucesso")
})

app.get("/users",(req,res) =>{
  res.send({message:"Esses sao os Users",users})
})

app.listen(3000,() => console.log("Server running on port 3000"))

