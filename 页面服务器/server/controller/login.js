const mysql = require('mysql');
const { findF } = require('../models/find');

async function loginHandle(ctx) {
  // 查找用户是否存在
  let queryString1 = 'SELECT * FROM newuser WHERE account = ?;';
  const { lName } = ctx.request.body;
  queryString1 = mysql.format(queryString1, lName);
  const result = await findF(queryString1);
  // 不存在
  if (result.length === 0) {
    ctx.body = JSON.stringify({ err: 1 });
    return;
  }
  // 密码不对
  if (ctx.request.body.lPassword !== result[0].passwords) {
    ctx.body = JSON.stringify({ err: 2 });
    return;
  }
  // 用户认证成功
  const { isRoot } = result[0];
  const queryString2 = 'SELECT * FROM newBless;';
  const queryString3 = 'SELECT * FROM newwish;';
  const queryString4 = 'SELECT * FROM newplanet;';
  const wishs = await findF(queryString3);
  const texts = await findF(queryString2);
  const planetList = await findF(queryString4);
  ctx.body = JSON.stringify({
    text: texts,
    err: 0,
    wish: wishs,
    isRoot,
    planetList,
    id: result[0].id,
    havePlanet: result[0].havePlanet,
  });
}
module.exports = loginHandle;
