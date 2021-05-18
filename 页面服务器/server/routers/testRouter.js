const Router = require('@koa/router');
const fs = require('fs');
const loginRouter = require('./loginRouter');

const testRouter = new Router();
testRouter.get('/test', async (ctx) => {
  ctx.body = 'hello world';
  console.log('收到测试请求\n');
  console.log(ctx.request.header);
  console.log('------------------\n');
  console.log(ctx.request.headers);
  ctx.set('Access-Control-Allow-Origin', '*');
});
testRouter.get('/', (ctx) => {
  ctx.body = fs.createReadStream('../../static/index.html');
});
testRouter.use(loginRouter.routes());

module.exports = testRouter;
