const Sequelize = require('sequelize')

const db = new Sequelize('ClothesDB', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

module.exports = { db }
