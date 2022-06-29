import { Router } from 'express'
import {
  createClassroom,
  getClassroom,
  getClassrooms,
  updateClassroom,
  deleteClassroom
} from '../controllers/classroom.controller'
const router = Router()

router.post('/', createClassroom)
router.get('/', getClassrooms)
router.get('/:id', getClassroom)
router.put('/:id', updateClassroom)
router.delete('/:id', deleteClassroom)

export default router
