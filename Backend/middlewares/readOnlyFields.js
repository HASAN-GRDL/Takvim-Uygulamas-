module.exports = (req, res, next) => {
  if (req.method === 'PATCH') {
    delete req.body.id
    delete req.body.user_id
  }
  next()
}
