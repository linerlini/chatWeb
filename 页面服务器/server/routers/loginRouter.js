const Router = require('@koa/router');
const loginHandle = require('../controller/login');

const loginRouter = new Router();
loginRouter.prefix('/login');
loginRouter.post('/', loginHandle);

module.exports = loginRouter;
