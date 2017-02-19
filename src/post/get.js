import { Post } from '../db'
import passport from 'passport'

export default (app) => {
  app.get('/api/posts', passport.authenticate('jwt', {session: false}), async (req, res) => {
    const { email } = req.headers.email
    let posts = null
    posts = await Post.filter({owner: email}).limit(10).execute()
    res.send(posts)
  })
}
