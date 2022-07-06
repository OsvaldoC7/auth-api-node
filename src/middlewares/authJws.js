import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/User'

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    if (!token) return res.status(403).json('Unauthorized')

    const { id } = jwt.verify(token, config.SECRET)

    const user = await User.findById(id, { password: 0 })
    if (!user) return res.status(404).json({ message: 'User not found' })

    next()
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' })
  }
}
