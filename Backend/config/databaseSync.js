const User = require('../models/user')

function syncModels () {
  Promise.resolve()
    .then(() => User.sync({ alter: true }))
    .catch((err) => Promise.reject(err))
}

module.exports = syncModels
