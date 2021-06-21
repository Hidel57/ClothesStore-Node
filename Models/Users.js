const Sequelize = require('sequelize')
const bcrypt = require('bcrypt')

const { db } = require('../config/sequelize')

const Users = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  imgURL: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Email is empty!'
      },
      isEmail: {
        msg: 'email invalid'
      }
    },
    unique: {
      msg: 'User already registered'
    }
  },
  pass: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Password is empty!'
      }
    }
  },
  admin: {
    type: Sequelize.BOOLEAN,
    default: 0
  }
}, {
  hooks: {
    beforeCreate (user) {
      user.pass = bcrypt.hashSync(user.pass, 10)
    }
  }
})

module.exports = Users
