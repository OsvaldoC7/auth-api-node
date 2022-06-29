import { Schema, model } from 'mongoose'

const classroomSchema = new Schema({
  room: String,
  buildingId: Number
}, {
  timestamps: true,
  versionKey: false
})

export default model('Classroom', classroomSchema)
