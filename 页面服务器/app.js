const Koa = require('koa');
const statics = require('koa-static');
const path = require('path');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const mainRouter = require('./server/routers/mainRouter.js');

const app = new Koa();
app.use(koaBody({
  multipart: true,
  formidable: {
    maxFileSize: 1000 * 1024 * 1024,
  },
  // patchKoa: true,
}));
app.use(cors());
app.use(statics(path.resolve(__dirname, 'dist')));
app.use(mainRouter.routes());
app.use(mainRouter.allowedMethods());
app.listen(5000);
