import { Router } from 'express'
import {
  getRole,
  getRoles
} from '../controllers/role.controller'

const router = Router()

router.get('/', getRoles)
router.get('/:id', getRole)

export default router
