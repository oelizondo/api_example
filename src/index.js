import app from './app'
import { thinky } from './db'

thinky.dbReady().then(() => {
  app.listen(9000)
})
