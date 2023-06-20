const { DataTypes } = require('sequelize')
const db = require('../config/database')

const Event = db.define('Event', {
  user_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  date: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    validate: {
      notNull: true,
      notEmpty: true,
      isDate: true,
      isAfter: new Date().toISOString()
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
  end_time: {
    type: DataTypes.TIME
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
    type: DataTypes.BIGINT
  },
  type: {
    allowNull: false,
    type: DataTypes.ENUM('meet', 'plan', 'chat', 'lesson'),
    validate: {
      notNull: true,
      notEmpty: true
    }
  }
})

module.exports = Event
