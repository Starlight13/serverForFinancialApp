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
    const user = ctx.request.headers.user;
    ctx.body = await pool.getSumByCat(ctx.request.headers.user);
})
.get('/addSpend', async (ctx, next) => {
    ctx.body = await pool.addSpend(ctx.request.headers.user,  ctx.request.headers.name, ctx.request.headers.price, ctx.request.headers.category, ctx.request.headers.roomiebool, ctx.request.headers.info)
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
.get('/signUp', async (ctx, next) => {
    ctx.body = await pool.addUser(ctx.request.headers.username, ctx.request.headers.email, ctx.request.headers.password);
})
.get('/changePass', async (ctx, next) => {
    ctx.body = await pool.changePass(ctx.request.headers.user, ctx.request.headers.password);
})
.get('/changeUsername', async (ctx, next) => {
    ctx.body = await pool.changeUsername(ctx.request.headers.user, ctx.request.headers.username);
})
.get('/getUserInfo', async (ctx, next) => {
    ctx.body = await pool.getUserInfo(ctx.request.headers.user);
})
.get('/ifRoomie', async (ctx, next) => {
    ctx.body = await pool.getRoomie(ctx.request.headers.user);
})
.get('/addRoomie', async (ctx, next) => {
    ctx.body = await pool.addRoomie(ctx.request.headers.user, ctx.request.header.roomie);
})
.get('/deleteRoomie', async (ctx, next) => {
    ctx.body = await pool.deleteRoomie(ctx.request.headers.user, ctx.request.header.roomie);
});

exports.routes = router.routes();