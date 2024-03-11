const Pool = require('pg').Pool

const  pool = new Pool({
  user: 'postgres',
  password: 'secret',
  database: 'diarybook',
  host: 'localhost',
  port: 5432
})

module.exports = pool