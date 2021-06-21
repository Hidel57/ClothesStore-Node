const Sequelize = require('sequelize')
const { db } = require('../config/sequelize')
const slug = require('slug')
// const shortid = require('shortid')

const Categories = db.define('categories', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  url: Sequelize.STRING
}, {
  hooks: {
    beforeCreate (product) {
      const url = slug(product.name).toLowerCase()
      // product.url = `${url}-${shortid.generate()}`
      product.url = url
    }
  }
})

// Categories.hasMany(Products)

module.exports = Categories
