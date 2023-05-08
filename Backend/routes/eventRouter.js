const express = require('express')
const router = express.Router()
const use = require('../utils/use')

const eventController = require('../controllers/eventController')

router.get('/', use(eventController.getEventDate))
router.post('/', use(eventController.postEvent))

module.exports = router
