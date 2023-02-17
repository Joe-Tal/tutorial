import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const mongodbUrl = process.env.DB_URL

let mongodb

const connect = async () => {
  try {
    mongodb = await MongoClient.connect(mongodbUrl)
    console.log(new Date().toISOString().slice(0, -5), 'Connect to cloudDB')
    return mongodb
  } catch (err) {
    console.error('mongo connection error', err)
    throw err
  }
}

const get = () => {
  return mongodb
}

const close = () => {
  mongodb.close()
  console.log(
    new Date().toISOString().slice(0, -5),
    'Disconnect from stockTradesDb'
  )
}

export default { connect, get, close }
