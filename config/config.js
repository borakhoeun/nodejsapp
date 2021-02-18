const dotenv = require('dotenv')
const path = require('path')

if(!process.env.DB_HOST) {
  dotenv.config({
    path: path.join(__dirname, '..', '.env')
  })
}

module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: 'mysql'
}