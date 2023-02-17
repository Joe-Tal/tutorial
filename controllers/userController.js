import { StatusCodes } from 'http-status-codes'
import cloudDB from '../cloudDB.js'

const upsertUser = async (req, res) => {
  const db = cloudDB.get().db('tutorial')

  const email = 'steven.talafous@gmail.com'
  const set = {
    email: email,
    phone: '7327799640',
    address: 'miami',
  }

  await db
    .collection('firstCollection')
    //1. Finding the document
    .updateOne({ email: email }, { $set: set }, { upsert: true })

  console.log('upsert user for')
  res.status(StatusCodes.OK).json({ msg: 'upsert user' })
}

export { upsertUser }
