const addMysql = require('../models/add');
const alterMysql = require('../models/alter');

async function wishHandle(ctx) {
  const content = ctx.request.body;
  await addMysql('newwish', [new Date(), 0, content, null]);
  console.log('添加愿望成功');
  ctx.set('Content-Type', 'text/plain');
  ctx.body = '添加愿望成功';
}
async function wishFulfillHandle(ctx) {
  const { content } = ctx.request.body;
  console.log(content);
  await alterMysql('newwish', 'isFulfill', 1, 'content', content);
  await alterMysql('newwish', 'fulfillTime', new Date(), 'content', content);
  console.log('实现愿望');
  ctx.set('Content-Type', 'text/plain');
  ctx.body = '实现愿望';
}

module.exports = { wishHandle, wishFulfillHandle };
