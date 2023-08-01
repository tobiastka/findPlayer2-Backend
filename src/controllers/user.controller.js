import User from '../models/User.js'
import { checkPassword, hashPassword } from '../utils/encrypting.js'

const userController = {
  sign: async (req, res) => {
    try {
      const { username, password } = req.body
      const newUser = await User.create({
        username,
        password: await hashPassword(password)
      })
      res.send(newUser)
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(409).send('Nombre de usuario ya existente')
      }
    }
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body
      const dbUser = await User.findOne({
        where: {
          username
        }
      })
      console.log(dbUser)
      if (!dbUser) res.status(404).send('Usuario no existente')
      if (await checkPassword(password, dbUser.password)) {
        res.status(200).send('Login exitoso')
      } else {
        res.status(401).send('Datos incorrectos')
      }
    } catch (error) {

    }
  }
}

export default userController
