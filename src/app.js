import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import authRoutes from './routes/auth.routes'
import classroomRoutes from './routes/classroom.routes'
import userRoutes from './routes/user.routes'

const app = express()

app.set('pkg', pkg)
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

export default app
