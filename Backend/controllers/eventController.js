const { Op } = require('sequelize')
const Event = require('../models/event')

module.exports.postEvent = async function (req, res) {
  const result = await Event.create(req.body)
  res.status(201).json(result)
}

module.exports.getEventDate = async function (req, res) {
  const { date } = req.query

  const result = await Event.findAll({
    where: {
      date: {
        [Op.eq]: date
      }
    }
  })
  res.status(201).json(result)
}
