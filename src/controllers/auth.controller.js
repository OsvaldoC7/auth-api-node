import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
  try {
    const { email, password, name, udgCode, roles } = req.body

    // const userFound = User.find({ email })

    const newUser = new User({
      email,
      password: await User.encryptPassword(password),
      name,
      udgCode,
      roles
    })
    const user = await newUser.save()
    const token = jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: 432000 // 5 dias en segundos
    })

    res.status(200).json({ user, token })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const signIn = async (req, res) => {
  try {
    res.json('hola')
  } catch (error) {
    res.status(500).json(error)
  }
}
