const Sequelize = require('sequelize')
const { db } = require('../config/sequelize')
const Categories = require('./Categories')

const Products = db.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  imgURL: Sequelize.STRING,
  price: Sequelize.FLOAT,
  color: Sequelize.STRING,
  size: Sequelize.STRING
})

Products.belongsTo(Categories)

module.exports = Products
