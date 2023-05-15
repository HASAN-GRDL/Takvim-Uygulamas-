const express = require('express')
const errorHandler = require('../middlewares/errorHandler')
const readOnlyFields = require('../middlewares/readOnlyFields')
const router = express.Router()

router.use('/auth', readOnlyFields, require('./userRouter'))
router.use('/event', readOnlyFields, require('./eventRouter'))

router.use(errorHandler)
module.exports = router
