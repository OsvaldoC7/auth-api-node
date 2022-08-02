import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import pkg from '../package.json'
import authRoutes from './routes/auth.routes'
import classroomRoutes from './routes/classroom.routes'
import userRoutes from './routes/user.routes'
import roleRoutes from './routes/role.routes'
import { createRoles } from './libs/initialSetup'

const app = express()
createRoles()

app.set('pkg', pkg)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})

app.use('/auth', authRoutes)
app.use('/classroom', classroomRoutes)
app.use('/user', userRoutes)
app.use('/role', roleRoutes)

export default app
