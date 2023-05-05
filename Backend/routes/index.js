const express = require('express')
const errorHandler = require('../middlewares/errorHandler')
const router = express.Router()

const userRouter = require('./userRouter')

router.use('/auth', userRouter)

router.use(errorHandler)
module.exports = router
