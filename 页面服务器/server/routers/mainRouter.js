const Router = require('@koa/router');
const fs = require('fs');
const loginRouter = require('./loginRouter');
const registRouter = require('./registRouter');
const wishRouter = require('./wishRouter');
const blessRouter = require('./blessingRouter');
const planetRouter = require('./planetRouter');

const mainRouter = new Router();
mainRouter.use(loginRouter.routes())
  .use(registRouter.routes())
  .use(wishRouter.routes())
  .use(blessRouter.routes())
  .use(planetRouter.routes());
mainRouter.get('/', async (ctx) => {
  ctx.body = fs.createReadStream('../../static/index.html');
});
module.exports = mainRouter;
