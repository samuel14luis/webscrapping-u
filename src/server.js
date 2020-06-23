var express = require('express')

const app = express();

//Routes
var IndexRoutes = require('./routes/index.routes')
var TaskRoutes = require('./routes/tasks.routes')

//Settings
app.set('port', process.env.PORT || 3000)

//Routes
app.use(IndexRoutes)
app.use('/tasks', TaskRoutes)

module.exports = app;