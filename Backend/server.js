require('dotenv').config()
const express = require('express')
const db = require('./config/database')
const syncModels = require('./config/databaseSync')
const router = require('./routes')

const app = express()

app.use(express.json())
app.use('/api', router)
app.listen(4444)

db.authenticate()
  .then(() => console.log('Successful connection to database'))
  .then(() => syncModels())
  .then(() => console.log('Successfully created models'))
  .catch((err) =>
    console.log('Connection to database failed : ' + err.message)
  )
