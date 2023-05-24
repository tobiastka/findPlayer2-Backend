import express from 'express'
import config from './config/index.js'
import morgan from 'morgan'
import sequelize from './db/index.js'
import './db/models/User.js'
import apiRounter from './routes/index.js'

const app = express()
app.use(morgan('tiny'))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('API esta funcionando correctamente ^^')
})
app.use('/api', apiRounter)

app.listen(config.app.port, async () => {
  console.log(`Servidor corriendo en el puerto ${config.app.port}`)
  await sequelize.sync({ force: false })
})
