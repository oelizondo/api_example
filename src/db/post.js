import { thinky } from './thinky'

export const Post = thinky.createModel('Post', {
  title: thinky.type.string().required(),
  content: thinky.type.string().required(),
  owner: thinky.type.string().required()
})
