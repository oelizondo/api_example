import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { jwtSecret } from '../../config'
import { User } from '../db'

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: jwtSecret
}

passport.use(new JwtStrategy(jwtOpts, async (payload, done) => {
  let user = null

  console.log('Payload: ', payload)

  try {
    user = await User.get(payload.id)
                     .without(['password'])
                     .execute()
  } catch (e) {
    return done(e, false)
  }

  if (!user) return done(null, false)

  console.log(user)
  return done(null, user)
}))
