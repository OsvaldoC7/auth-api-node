import { Router } from 'express'
import {
  createClassroom,
  getClassroom,
  getClassrooms,
  updateClassroom,
  deleteClassroom
} from '../controllers/classroom.controller'
import { verifyToken } from '../middlewares/authJws'

const router = Router()

router.post('/', verifyToken, createClassroom)
router.get('/', getClassrooms)
router.get('/:id', getClassroom)
router.put('/:id', verifyToken, updateClassroom)
router.delete('/:id', verifyToken, deleteClassroom)

export default router
