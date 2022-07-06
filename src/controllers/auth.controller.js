import User from '../models/User'
import Role from '../models/Role'
import jwt from 'jsonwebtoken'
import config from '../config'

export const signUp = async (req, res) => {
  try {
    const { email, password, name, udgCode, roles } = req.body

    const userFound = await User.findOne({ email })
    if (userFound) return res.status(401).json({ message: 'User already exists' })

    const newUser = new User({
      email,
      password: await User.encryptPassword(password),
      name,
      udgCode
    })

    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } })
      newUser.roles = foundRoles.map(role => role._id)
    } else {
      const role = await Role.findOne({ name: 'user' })
      newUser.roles = [role._id]
    }

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
    const { email, password } = req.body
    const userFound = await User.findOne({ email }).populate('roles')

    if (!userFound) return res.status(400).json({ message: 'User not found' })

    const matchPassword = await User.comparePassword(password, userFound.password)
    if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' })

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 432000
    })

    res.status(200).json({ user: userFound, token })
  } catch (error) {
    res.status(500).json(error)
  }
}
