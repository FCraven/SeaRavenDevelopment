const Sequelize = require('sequelize')

const db = require('./_db')

const User = db.define('user', {
  name: Sequelize.STRING,
  photo: {
    type: Sequelize.STRING,
    defaultValue: '/public/default-photo.jpg'
  },
  password: Sequelize.STRING
})

module.exports = User
