import express from 'express'
import userController from '../controllers/user.controller.js'

const userRouter = express.Router()

userRouter.post('/sign', userController.sign)
userRouter.post('/login', userController.login)

export default userRouter
