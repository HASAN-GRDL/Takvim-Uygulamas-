const express = require('express')
const router = express.Router()
const use = require('../utils/use')

const userController = require('../controllers/userController')

router.get('/user/:username/', use(userController.getUser))
router.post('/', use(userController.postUser))
router.post('/login', use(userController.login))

module.exports = router
