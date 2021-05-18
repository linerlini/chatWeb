const Router = require('@koa/router');
const registHandle = require('../controller/regist');

const registRouter = new Router();
registRouter.prefix('/regist');
registRouter.post('/', registHandle);

module.exports = registRouter;
