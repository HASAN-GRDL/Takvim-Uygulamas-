const express = require('express')
const router = express.Router()
const use = require('../utils/use')

const eventController = require('../controllers/eventController')

router.get('/', use(eventController.getEventDate))
router.post('/', use(eventController.postEvent))
router.patch('/:id', use(eventController.updateEvent))
router.delete('/:id', use(eventController.deleteEvent))

module.exports = router
