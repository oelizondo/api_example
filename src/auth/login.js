import { User } from '../db'
import hash from '../util/hash'
import jwt from 'jsonwebtoken'
import { jwtSecret } from '../../config'

export default (app) => {
  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body
    let user = null
    user = await User.filter({email}).limit(1).run()
    user = user[0]

    if (hash(password) !== user.password) {
      return res.status(400).json({message: 'Passwords do not match'})
    }

    const payload = {id: user.id}

    const token = jwt.sign(payload, jwtSecret, {expiresIn: 60 * 60})
    res.status(200).json({message: 'Logged in', token: token, user: user.email})
  })
}
