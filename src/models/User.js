import { DataTypes } from 'sequelize'
import sequelize from '../db/index.js'

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{ timestamps: false }
)

export default User
