import express from 'express'
const router = express.Router()
import { upsertUser } from '../controllers/userController.js'

router.route('/upsert').get(upsertUser)

export default router
