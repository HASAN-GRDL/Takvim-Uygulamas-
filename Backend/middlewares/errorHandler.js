const { DatabaseError, ValidationError } = require('sequelize')

module.exports = (err, req, res, next) => {
  if (!err) next()

  console.log('hataya girdi')

  if (err instanceof DatabaseError) {
    // console.log(err.parent.toString())
    return res.status(500).send(err.parent.toString())
  }

  if (err instanceof ValidationError) {
    const errObj = {}
    if (err.errors) {
      err.errors.forEach((er) => { errObj[er.path] = translate(er) })
      return res.status(400).json(errObj)
    }
  }

  console.log(err)
  res.status(500).send(err)
}

function translate (error) {
  const TR = {
    notEmpty: 'Bu alan boş olamaz',
    isEmail: 'Geçerli bir e-posta giriniz',
    is_null: 'Bu alan doldurulmalı',
    not_unique: 'Bu alan benzersiz olmalıdır.',
    len: `Bu alanın uzunluğu ${error.validatorArgs[0]} ile ${error.validatorArgs[1]} arasında olmalıdır.`
  }

  const result = TR[error.validatorKey]
  return result || error.message
}
