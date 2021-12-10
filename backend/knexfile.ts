import { Knex } from 'knex'
import dotenv from 'dotenv'

dotenv.config();

const config: Knex.Config = {
  client: "pg",
  connection: {
    database: process.env.DATABASE,
    user: "postgres",
    password: process.env.PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "src/database/migrations"
  },
  seeds: {
    directory: "src/seeds/"
  }
}

export default config