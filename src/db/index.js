
import Sequelize from 'sequelize'
import config from '../config/index.js'

const sequelize = new Sequelize({
  ...config.db
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
