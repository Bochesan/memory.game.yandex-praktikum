import 'reflect-metadata'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import userRoute from './src/routes/userRoute'
import topicRoute from './src/routes/topicRoute'
import commentRoute from './src/routes/commentRoute'
import sequelize from './config/sequelize'
import reactionRoute from './src/routes/reactionRoute'

const portServer = Number(process.env.SERVER_PORT) || 3001
const portClient = Number(process.env.CLIENT_PORT) || 3030

const app = express()

app.use(bodyParser.json())

const corsOptions = {
  origin: `http://localhost:${portClient}`,
  credentials: true,
}
app.use(cors(corsOptions))

app.use('/api', userRoute)
app.use('/api', topicRoute)
app.use('/api', commentRoute)
app.use('/api', reactionRoute)

const startServer = async () => {
  try {
    await sequelize.sync()
    app.listen(portServer, () => {
      console.log(`Server is running on port ${portServer}`)
    })
  } catch (err) {
    console.error('Unable to connect to the database:', err)
  }
}

startServer()
