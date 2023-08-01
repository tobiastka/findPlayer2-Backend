import express from 'express'
import userRouter from './user.route.js'

const apiRounter = express.Router()
apiRounter.use('/user', userRouter)

export default apiRounter
