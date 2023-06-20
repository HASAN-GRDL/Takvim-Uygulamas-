const { Op } = require('sequelize')
const Event = require('../models/event')

module.exports.postEvent = async function (req, res) {
  const result = await Event.create(req.body)
  res.status(201).json(result)
}

module.exports.getEventDate = async function (req, res) {
  const { userId, date } = req.query
  if (!userId) return res.status(400).json({ userId: 'Bu zorunlu alan' })

  const filter = {}
  filter.user_id = userId
  if (date) filter.date = { [Op.eq]: date }

  const result = await Event.findAll({
    where: {
      ...filter
    },
    order: [['createdAt', 'DESC']]
  })
  res.status(200).json(result)
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
