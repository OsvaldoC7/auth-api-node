import { Schema, model } from 'mongoose'

export const ROLES = ['admin', 'student', 'test', 'user']

const roleSchema = new Schema({
  name: String
}, {
  versionKey: false
})

export default model('Role', roleSchema)
