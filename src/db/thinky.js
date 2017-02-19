import initThinky from 'thinky'
import { dbConfig } from '../../config'

const thinky = initThinky(dbConfig)
const { r } = thinky

export { thinky, r }
