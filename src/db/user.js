import { thinky } from './thinky'

export const User = thinky.createModel('User', {
  email: thinky.type.string().required(),
  password: thinky.type.string().required()
})
