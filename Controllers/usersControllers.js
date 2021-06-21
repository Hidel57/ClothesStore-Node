const Users = require('../Models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.GetSignin = (req, res) => {
  res.render('signin')
}

exports.PostSignin = async (req, res) => {
  const { name, email, password } = req.body
  const admin = 0
  try {
    await Users.create({ email, name, pass: password, admin })
    res.redirect('log-in')
  } catch (error) {
    console.log(error.message)
    res.render('signin', {
      errors: error.errors
    })
  }
}

exports.GetLogin = (req, res) => {
  console.log(req.body)
  res.render('log-in')
}

exports.PostLogin = async (req, res) => {
  const { email, password } = req.body
  const user = await Users.findOne({ where: { email: email } })
  if (user === null) {
    return res.status(400).json({
      message: 'Usuario no registrado'
    })
  } else {
    if (!bcrypt.compareSync(password, user.pass)) {
      return res.status(400).json({
        message: 'Contraseña incorrecta'
      })
    }
  }
  const token = jwt.sign({
    user: user
  }, 'secret', { expiresIn: 60 * 60 * 24 * 30 })
  res.json({
    ok: true,
    user,
    token
  })
  // res.redirect('/')
}
