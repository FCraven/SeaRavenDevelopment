const Sequelize = require('sequelize')
const dbname = 'searavendevelopment'

const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432:${dbname}`, {
  logging: false
})


module.exports = db;
