const bcrypt = require('bcrypt')
const User = require('../models/user')
const Event = require('../models/event')

module.exports.getUser = async function (req, res) {
  const result = await User.findOne({ where: { username: req.params.username }, attributes: { exclude: ['password'] }, include: [{ model: Event }] })
  if (!result) return res.status(404).json({ error: 'Kullanıcı Bulunamadı' })
  res.json(result)
}

module.exports.login = async function (req, res) {
  const { username, password } = req.body

  if (!(username && password)) return res.status(400).json({ error: 'Kullanıcı adı ve şifre doldurulmalıdır' })
  const result = await User.findOne({ where: { username } })

  if (!result) { return res.status(401).json({ error: 'Kullanıcı adı veya şifre yanlış' }) }
  const match = await bcrypt.compare(password, result.password)

  if (match) {
    delete result.password
    return res.json(result)
  }

  res.status(401).json({ error: 'Kullanıcı adı veya şifre yanlış' })
}

module.exports.postUser = async function (req, res) {
  const result = await User.create(req.body)
  delete result.dataValues.password
  res.status(201).json(result)
}
