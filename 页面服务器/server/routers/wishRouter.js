const Router = require('@koa/router');
const { wishHandle, wishFulfillHandle } = require('../controller/wish');

const wishRouter = new Router();
wishRouter.prefix('/wish');
wishRouter.post('/', wishHandle);
wishRouter.post('/fulfill', wishFulfillHandle);

module.exports = wishRouter;
