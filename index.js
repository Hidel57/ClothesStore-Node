const express = require('express')
const exphbs = require('express-handlebars')
const { routers } = require('./routes')
const phat = require('path')
const { db } = require('./config/sequelize')
const bodyParser = require('body-parser')
const passport = require('./config/passport')
const session = require('express-session')

// import Models
require('./Models/Products')
require('./Models/Users')
require('./Models/Categories')

db.sync()
  .then(() => console.log('Conect'))
  .catch(err => console.log(err))

const app = express()

app.use(session({
  secret: 'secrettexthere',
  saveUninitialized: false,
  resave: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.engine('handlebars',
  exphbs({
    defaultLayout: 'layout'
  })
)

app.set('view engine', 'handlebars')
app.set('views', phat.join(__dirname, './Views'))
app.use(express.static(phat.join(__dirname, './public')))

// app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routers())

app.listen(3000)
