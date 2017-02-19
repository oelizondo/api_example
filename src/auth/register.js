import { User } from '../db'
import hash from '../util/hash'

export default (app) => {
  app.post('/api/register', async (req, res) => {
    const { email, password, passwordRepeat } = req.body
    let users = null

    if (password !== passwordRepeat) return res.status(400).json({message: 'passwords do not match'})

    users = await User.filter(email)

    if (users.length) return res.status(400).json({message: 'Email is taken'})

    const newUser = new User({
      email: email,
      password: hash(password)
    })

    await newUser.save()

    res.status(200).json({message: 'User created!'})
  })
}
