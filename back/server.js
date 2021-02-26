import mongoose from 'mongoose'
import cors from 'cors'
import http from 'http'
import session from 'express-session'
import dotenv from 'dotenv'
import db from './db.js'
import express from 'express'
import fs from 'fs'
import morgan from 'morgan'
dotenv.config()


const port = 4000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(session({
  secret: process.env.SESSION_KEY
}))
const server = http.createServer(app)

app.use(morgan('dev'))



app.post('/login', (req, res) => {
  console.log(req.body);
  const { email, password } = req.body
  const user = db.find((user) => user.email == email && user.password == password)
  console.log(user, 'user');
  if (user) {
    console.log(user, 'userisavaivable');
    // delete user.password
    req.session.user = user
    return res.end()
  }
  res.status(401).end()
})

app.get('/secret', (req, res, next) => {
  console.log(req.session);
  if (req.session.user) {

    return next()
  }
  res.status(401).end()
},
  (req, res) => {
    res.json({
      email: req.session.user.email
    })
  })

app.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy(() => {
      res.clearCookie('connect.sid')
    })
    res.end()
  }
  else res.end()
})


app.use((req, res, next) => {
  if (req.session.user) {
    return next()
  }
  res.status(401).end()
}
)



//////// when deploy!!!!!///
// app.get('*', async () => {
//   const index = fs.promises.readFile('../build/index.html', 'utf-8')
//   res.send(index)
// })
/////////



server.listen(port, () => {
  console.log('Server is started port', port)
})
