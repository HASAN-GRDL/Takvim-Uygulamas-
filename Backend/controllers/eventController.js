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

module.exports.updateEvent = async function (req, res) {
  const result = await Event.update(req.body, { where: { id: req.params.id }, returning: true })
  if (result[0] === 0) return res.status(400).json({ error: 'Bulunamadı' })
  res.json(result[1][0])
}

module.exports.deleteEvent = async function (req, res) {
  const result = await Event.destroy({ where: { id: req.params.id } })
  if (result === 0) return res.status(400).json({ error: 'Bulunamadı' })
  res.status(204).end()
}
