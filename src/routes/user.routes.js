import { Router } from 'express'
import {
  getUser,
  getUsers,
  updateUser
} from '../controllers/user.controller'
import {
  verifyToken,
  isStudent
} from '../middlewares/authJws'
import { checkRolesExisted } from '../middlewares/verifySignup'

const router = Router()

router.post('/', [checkRolesExisted])
router.get('/', [verifyToken, isStudent], getUsers)
router.get('/:id', verifyToken, getUser)
router.put('/:id', verifyToken, updateUser)
router.delete('/:id')

export default router
