
const Koa = require('koa');
const {routes} = require('./router');
const Logger = require('koa-logger');

const port = 8080;

let app = new Koa();

app.use(Logger());
app.use(routes);


module.exports = app.listen(8080);
