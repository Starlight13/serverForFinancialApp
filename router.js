const Router = require('koa-router');
const pool = require('./db/queries.js');

const router = new Router();



router.get('/', async (ctx, next) => {
    ctx.body = 'Hello world!';
})
.get('/Home', async (ctx, next) => {
    ctx.body = await pool.userExpense(ctx.request.headers.user);
})
.get('/Roomie', async (ctx, next) => {
    ctx.body = await pool.commonExpense(ctx.request.headers.user, ctx.request.headers.roomie)
})
.get('/getCommonPay', async (ctx, next) => {
    ctx.body = await pool.compareExpense(ctx.request.headers.user);
})
.get('/getPie', async (ctx, next) => {
    ctx.body = await pool.getSumByCat(ctx.request.headers.user);
})
.post('/addSpend', async (ctx, next) => {
    data = ctx.request.body;
    ctx.response.body = await pool.addSpend(data.user,  data.name, data.price, data.category, data.roomiebool, data.info)
})
.get('/getSum',async (ctx, next) => {
    ctx.body = await pool.getSum(ctx.request.headers.user);
})
.get('/barData', async (ctx, next) => {
    ctx.body = await pool.mySumByCat(ctx.request.headers.user);
})
.get('/lineData', async (ctx, next) => {
    ctx.body = await pool.monthForBar(ctx.request.headers.user);
})
.get('/signIn', async (ctx, next) => {
    ctx.body = await pool.authUser(ctx.request.headers.email, ctx.request.headers.password);
})
.post('/signUp', async (ctx, next) => {
    data = ctx.request.body;
    ctx.body = await pool.addUser(data.username, data.email, data.password);
})
.get('/ifEmailExists', async (ctx, next) => {
    ctx.body = await pool.ifEmailExists(ctx.request.headers.email);
})
.post('/changePass', async (ctx, next) => {
    data = ctx.request.body;
    ctx.body = await pool.changePass(data.user, data.password);
})
.post('/changeUsername', async (ctx, next) => {
    data = ctx.request.body;
    ctx.body = await pool.changeUsername(data.user, data.username);
})
.get('/getUserInfo', async (ctx, next) => {
    ctx.body = await pool.getUserInfo(ctx.request.headers.user);
})
.get('/ifRoomie', async (ctx, next) => {
    ctx.body = await pool.getRoomie(ctx.request.headers.user);
})
.post('/addRoomie', async (ctx, next) => {
    data = ctx.request.body;
    ctx.body = await pool.addRoomie(data.user, data.roomie);
})
.get('/checkRoomie', async (ctx, next) => {
    ctx.body = await pool.checkRoomie(ctx.request.headers.user);
})
.post('/deleteRoomie', async (ctx, next) => {
    data = ctx.request.body;
    ctx.body = await pool.deleteRoomie(data.user, data.roomie);
});

exports.routes = router.routes();