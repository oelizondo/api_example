import crypto from 'crypto'
import { salt } from '../../config'

export default (password) => {
  return crypto.createHash('sha256')
               .update(password + salt)
               .digest('hex')
}
