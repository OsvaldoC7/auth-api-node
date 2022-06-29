import Classroom from '../models/Classroom'

export const createClassroom = async (req, res) => {
  try {
    const { room, buildingId } = req.body

    const newClassroom = new Classroom({ room, buildingId })
    const classroom = await newClassroom.save()

    res.status(201).json(classroom)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id)
    res.status(200).json(classroom)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find()
    const total = await Classroom.find().countDocuments()
    res.status(200).json({
      result: classrooms,
      total
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(classroom)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findByIdAndDelete(req.params.id)
    res.status(200).json(classroom)
  } catch (error) {
    res.status(500).json(error)
  }
}
