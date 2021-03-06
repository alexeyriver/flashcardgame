import mongoose from 'mongoose'
import cors from 'cors'
import http from 'http'
import session from 'express-session'
import dotenv from 'dotenv'
import db from './db.js'
import express from 'express'
import fs from 'fs'
import morgan from 'morgan'
import sessionFile from 'session-file-store'
import User from './models/user.js'
import Game from './models/gameOfThrones.js'
import Rule from './models/trafficRules.js'

mongoose.connect('mongodb://localhost:27017/reactflash', { useNewUrlParser: true, useUnifiedTopology: true });

const FileStore = sessionFile(session)
dotenv.config()
const port = 4000
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// app.use(session({
//   store: new FileStore(),
//   secret: process.env.SESSION_KEY,
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     expires: 6000000,
//     httpOnly: false
//   }
// }))
const server = http.createServer(app)
app.use(morgan('dev'))

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  console.log(email, password );
  let user = await User.findOne({ email: email })
//  console.log(user);
  // const user = db.find((user) => user.email == email && user.password == password)
  if (user && user.password == password) {
    // req.session.user = user
    // console.log(req.session);
    return res.json({status:200,user:user.name})
  }
 else return res.json({status:false})
})

app.post('/signup', async (req, res) => {
console.log(req.body);
  const { email, password, name } = req.body
  let check =await User.findOne({ email: email })
  console.log(check);
  if (!check) {
    let user = await new User({ name, email, password })
    await user.save()
    //  req.session.user = user
    res.json({ status: true , user:user.name})
  }
  else res.json({ status: false })

})

app.get('/card', async (req, res, next) => {
  
  let game = await Game.find()
  let rule = await Rule.find()
console.log(game,rule,'afafafas');
  res.json({game, rule})
})

app.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy()
    res.clearCookie('connect.sid')
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
