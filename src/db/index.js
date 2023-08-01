
import Sequelize from 'sequelize'
import config from '../config/index.js'

const { db } = config

const sequelize = new Sequelize({
  database: db.database,
  username: db.username,
  password: db.password,
  host: db.host,
  dialect: db.dialect,
  port: db.port,
  logging: db.logging
})

sequelize.authenticate()
  .then(response => {
    console.log('La conexion con la DB fue exitosa')
    console.log('Configuracion', sequelize.config)
  })
  .catch(error => {
    console.log('Error al conectar con la DB')
    console.log(error.name, error.parent)
  })

export default sequelize
