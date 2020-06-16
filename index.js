
const Koa = require('koa');
const {routes} = require('./router');
const Logger = require('koa-logger');
const bodyParser = require('koa-bodyparser')

var port = process.env.PORT || 8080;

let app = new Koa();

app.use(Logger());
app
.use(bodyParser())
.use(routes);


// app.listen(port);

module.exports = app.listen(port);

