const addMysql = require('../models/add');
const alterMysql = require('../models/alter');
const { findFV } = require('../models/find');

async function blessHandle(ctx) {
  const { newBless, account } = ctx.request.body;
  const result = await findFV('SELECT * FROM newBless WHERE account = ?', account);
  if (result.length === 0) {
    await addMysql('newBless', [account, newBless]);
    console.log('添加成功');
    ctx.body = '添加成功';
    ctx.set('Content-Type', 'text/plain');
  } else {
    await alterMysql('newBless', 'text', newBless, 'account', account);
    console.log('修改成功');
    ctx.body = '修改成功';
    ctx.set('Content-Type', 'text/plain');
  }
}

module.exports = blessHandle;
