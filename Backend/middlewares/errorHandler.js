const { DatabaseError, ValidationError } = require('sequelize')

module.exports = (err, req, res, next) => {
  if (!err) next()

  console.log('hataya girdi')
  console.log(err)

  if (err instanceof DatabaseError) {
    // console.log('DatabaseError', err)
    return res.status(400).send({ error: DatabaseTranslate(err) })
  }

  if (err instanceof ValidationError) {
    const errObj = {}
    if (err.errors) {
      err.errors.forEach((er) => { errObj[er.path] = ValidationTranslate(er) })
      return res.status(400).json(errObj)
    }
  }

  console.log('UnknownError', err)
  res.status(500).send(err)
}

function ValidationTranslate (error) {
  const TR = {
    notEmpty: 'Bu alan boş olamaz',
    isEmail: 'Geçerli bir e-posta giriniz',
    is_null: 'Bu alan doldurulmalı',
    not_unique: 'Bu alan benzersiz olmalıdır.',
    isDate: 'Bu alan geçerli bir tarih olmalıdır.',
    isAfter: `Bu alan ${error.validatorArgs[0]} tarihinden sonra olmalıdır.`,
    isIn: `Bu alan sadece ${error.validatorArgs.toString()} değerlerini alabilir.`,
    len: `Bu alanın uzunluğu ${error.validatorArgs[0]} ile ${error.validatorArgs[1]} arasında olmalıdır.`
  }

  const result = TR[error.validatorKey]
  return result || error.message
}

function DatabaseTranslate (error) {
  const TR = {
    DateTimeParseError: 'Geçerli bir tarih giriniz.',
    DecodeTimeOnly: 'Geçerli bir saat giriniz.',
    pg_strtoint32: 'İnteger bir değer giriniz.',
    ri_ReportViolation: `Girilen ${error.parent.detail?.match(/(?<=\().*?(?=\))/g)[0]} ile bir primaryKey bulunamadı.`
  }

  const result = TR[error.parent.routine]
  return result || error.message
}
