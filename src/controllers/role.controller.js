import Role from '../models/Role'

export const getRole = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id)
    res.status(200).json(role)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find()
    const total = await Role.find().countDocuments()
    res.status(200).json({
      result: roles,
      total
    })
  } catch (error) {
    res.status(500).json(error)
  }
}
