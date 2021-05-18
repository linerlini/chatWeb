const Router = require('@koa/router');
const { queren, registPlanet } = require('../controller/planet');

const planetRouter = new Router();
planetRouter.prefix('/planet');
planetRouter.get('/', queren);
planetRouter.post('/', registPlanet);

module.exports = planetRouter;
