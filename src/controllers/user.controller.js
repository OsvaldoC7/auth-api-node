import User from '../models/User'

// export const createUser = async (req, res) => {
//   const { email, password, name, udgCode, roles } = req.body
// }

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('roles').populate('roles')
    const total = await User.find().countDocuments()
    res.status(200).json({
      result: users,
      total
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('roles')
    if (!user) return res.status(400).json({ message: 'User not found' })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}
