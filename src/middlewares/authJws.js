import jwt from 'jsonwebtoken'
import config from '../config'
import Role from '../models/Role'
import User from '../models/User'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    if (!token) return res.status(403).json('Unauthorized')

    const { id } = jwt.verify(token, config.SECRET)
    req.userId = id

    const user = await User.findById(id, { password: 0 })
    if (!user) return res.status(404).json({ message: 'User not found' })

    next()
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}

export const isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({ _id: { $in: user.roles } })
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'admin') {
      next()
      return
    }
  }
  return res.status(403).json('Unauthorized')
}

export const isStudent = async (req, res, next) => {
  const user = await User.findById(req.userId)
  const roles = await Role.find({ _id: { $in: user.roles } })
  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === 'student' || roles[i].name === 'admin') {
      next()
      return
    }
  }
  return res.status(403).json('Unauthorized')
}
