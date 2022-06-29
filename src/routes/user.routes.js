import { Router } from 'express'
import {
  getUser,
  getUsers,
  updateUser
} from '../controllers/user.controller'

const router = Router()

router.post('/')
router.get('/', getUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id')

export default router
