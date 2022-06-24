const express = require('express')
const app = express()
const db = require('./config/db') //Access db through knex
const consign = require('consign') //Consign helps loading all modules

// Passes app to all modules loaded from consign
consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.db = db // app.db access db using knex

app.listen(3000, () => {
  console.log('Backend executando... ')
})
