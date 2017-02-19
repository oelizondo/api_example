import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'
import authRoutes from './auth'
import postRoutes from './post'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(passport.initialize())

app.get('/', (req, res) => {
  res.send('hi')
})

authRoutes(app)
postRoutes(app)

export default app
