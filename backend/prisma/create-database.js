require('dotenv').config()
const mysql = require('mysql2/promise')

async function main() {
  const url = new URL(process.env.DATABASE_URL)
  const database = url.pathname.slice(1)

  const connection = await mysql.createConnection({
    host: url.hostname,
    port: url.port || 3306,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
  })

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``)
  await connection.end()
  console.log(`Base ${database} prete`)
}

main().catch((e) => {
  console.error(e)
  process.exitCode = 1
})
