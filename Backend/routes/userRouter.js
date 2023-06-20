const express = require('express')
const router = express.Router()
const use = require('../utils/use')

const userController = require('../controllers/userController')

router.post('/', use(userController.postUser))
router.post('/login', use(userController.login))
router.get('/user/:id/', use(userController.getUser))

module.exports = router
