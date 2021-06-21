const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const Users = require('../Models/Users')
const bcrypt = require('bcrypt')

passport.use(new LocalStrategy (
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async (email, password, done) => {
      const user = await Users.findOne({ where: { email: email } })
      const compare = bcrypt.compareSync(password, user.pass)
      console.log(compare)
      if (user === null) return done(null, false, {message: 'Users not Exits'})
      else {
        if (!compare) return done(null, false, {message: 'Password Incorrect'})
        else return done(null, user)
      }
  }
))

passport.serializeUser((user, callback) => {
  callback(null, user)
})

passport.deserializeUser((user, callback) => {
  callback(null, user)
})

module.exports = passport