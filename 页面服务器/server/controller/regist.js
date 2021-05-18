const addMysql = require('../models/add');
const { findF, findFV } = require('../models/find');

async function regist(ctx) {
  const {
    rName, rPassword, key, wm,
  } = ctx.request.body;
  const queryResult = await findFV('SELECT * FROM newuser WHERE account = ?', rName);
  const isRegist = queryResult.length !== 0;
  const responseBody = {};
  if (isRegist) {
    ctx.body = JSON.stringify({
      isRegist: 1,
    });
    ctx.set('Content-Type', 'application/json');
    return;
  }
  responseBody.isRegist = 0;
  let wishs;
  let texts;
  let planetList;
  const queryString2 = 'SELECT * FROM newBless;';
  const queryString3 = 'SELECT * FROM newwish;';
  const queryString4 = 'SELECT * FROM newplanet;';
  if (key === '1112') {
    addMysql('newuser', [rName, rPassword, 0, wm, 0, 0]);
    responseBody.isRoot = 0;
    responseBody.err = 0;
    wishs = await findF(queryString3);
    texts = await findF(queryString2);
    planetList = await findF(queryString4);
  } else if (key === '19991112') {
    addMysql('newuser', [rName, rPassword, 0, wm, 1, 1]);
    responseBody.isRoot = 1;
    responseBody.err = 0;
    wishs = await findF(queryString3);
    texts = await findF(queryString2);
    planetList = await findF(queryString4);
  } else {
    responseBody.err = 1;
  }
  responseBody.wishs = wishs;
  responseBody.text = texts;
  responseBody.planetList = planetList;
  ctx.body = JSON.stringify(responseBody);
  ctx.set('Content-Type', 'application/json');
}
module.exports = regist;
