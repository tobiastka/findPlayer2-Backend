import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()

if (envFound.error) {
  throw new Error('el archivo .env no fue encontrado')
}

export default {
  app: {
    port: Number(process.env.APP_PORT)
  },
  logs: {
    morgan: process.env.MORGAN
  },
  db: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: Boolean(Number(process.env.DB_LOGGING))
  }
}
