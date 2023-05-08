const express = require('express')
const errorHandler = require('../middlewares/errorHandler')
const router = express.Router()

router.use('/auth', require('./userRouter'))
router.use('/event', require('./eventRouter'))

router.use(errorHandler)
module.exports = router
