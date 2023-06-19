const { DataTypes } = require('sequelize')
const db = require('../config/database')
const bcrypt = require('bcrypt')

const User = db.define('User', {
  first_name: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      notEmpty: true,
      len: [3, 20]
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    },
    set (value) {
      const salt = bcrypt.genSaltSync(12)
      const hash = bcrypt.hashSync(value, salt)
      this.setDataValue('password', hash)
    }
  },
  tc_no: {
    type: DataTypes.BIGINT,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: false
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  user_type: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
    defaultValue: 'user',
    validate: {
      notNull: true,
      notEmpty: true
    }
  }
})

module.exports = User
