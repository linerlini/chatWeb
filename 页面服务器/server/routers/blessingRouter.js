const Router = require('@koa/router');
const blessHandle = require('../controller/bless');

const blessRouter = new Router();
blessRouter.prefix('/bless');
blessRouter.post('/', blessHandle);

module.exports = blessRouter;
