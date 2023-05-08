const Event = require('../models/event')
const User = require('../models/user')

function syncModels () {
  Promise.resolve()
    .then(() => User.sync({ alter: true }))
    .then(() => Event.sync({ alter: true }))
    .catch((err) => Promise.reject(err))
}

module.exports = syncModels

Event.beforeCreate((event, options) => {
  const price = 100
  const discountRate = 0.02
  const today = new Date()
  const eventDate = new Date(event.date)
  const diffDays = Math.round(Math.abs((today - eventDate) / (24 * 60 * 60 * 1000)))
  const discountedPrice = price - (discountRate * price * diffDays)

  event.price = discountedPrice
})
