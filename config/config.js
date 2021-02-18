const dotenv = require('dotenv')
const path = require('path')

if(!process.env.MYSQL_HOST) {
  dotenv.config({
    path: path.join(__dirname, '..', 'env')
  })
}

module.exports = {
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  passowrd: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DB,
  dialect: 'mysql'
}