const { DataTypes } = require('sequelize')
const db = require('../config/database')

const Event = db.define('Event', {
  date: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    validate: {
      notNull: true,
      notEmpty: true,
      isDate: true,
      isAfter: new Date().toLocaleDateString()
    }
  },
  time: {
    allowNull: false,
    type: DataTypes.TIME,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  price: {
    type: DataTypes.BIGINT,
    noUpdate: true
  },
  type: {
    allowNull: false,
    type: DataTypes.ENUM('meet', 'plan'),
    validate: {
      notNull: true,
      notEmpty: true,
      isIn: ['meet', 'plan']
    }
  }
})

module.exports = Event

