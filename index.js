
const Koa = require('koa');
const {routes} = require('./router');
const Logger = require('koa-logger');

var port = process.env.PORT || 5000;

let app = new Koa();

app.use(Logger());
app.use(routes);


app.listen(port);

