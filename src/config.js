import { config } from 'dotenv'
config()
export default {
  SECRET: 'modular_api',
  MONGODB_URI: process.env.MONGODB_URI
}
