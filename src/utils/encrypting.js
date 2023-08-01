import bcrypt from 'bcryptjs'

export const hashPassword = (password) => {
  const hashedPassword = bcrypt.genSalt(10)
    .then((salt) => {
      return bcrypt.hash(password, salt)
    })
    .catch((error) => {
      throw new Error(error)
    })
  return hashedPassword
}

export const checkPassword = (password, dbPassword) => {
  return bcrypt.compare(password, dbPassword)
    .catch(error => { throw new Error(error) })
}
