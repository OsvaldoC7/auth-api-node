import { Router } from 'express'
import {
  signUp,
  signIn
} from '../controllers/auth.controller'
import { checkDuplicateEmail, checkRolesExisted } from '../middlewares/verifySignup'

const router = Router()

router.post('/signin', signIn)
router.post('/signup', [checkRolesExisted, checkDuplicateEmail], signUp)

export default router
