import express from "express";

const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const loginRouter = require('./routes/login/RouteLogin')
const privateRouter = require('./routes/private/RoutePrivate')
const publicRouter = require('./routes/public/RoutePublic')

app.use(cors())
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/api', loginRouter)
app.use('/api', privateRouter)
app.use('/api', publicRouter)

module.exports = app