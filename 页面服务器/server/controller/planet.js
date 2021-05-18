const { findF, findFV } = require('../models/find');
const add = require('../models/add');
const alter = require('../models/alter');

async function queren(ctx) {
  const url = new URL(ctx.request.href);
  const xuhao = url.searchParams.get('xuhao');
  const result = await findFV('SELECT haved FROM newplanet WHERE id = ?', xuhao);
  const { haved = 0 } = result[0] || {};
  console.log(haved);
  ctx.set('Content-Type', 'text/plain');
  if (haved === 1) {
    ctx.body = 1;
  } else {
    ctx.body = 0;
  }
}
async function registPlanet(ctx) {
  const { account, id, name } = ctx.request.body;
  await add('newplanet', [id, account, 1, name]);
  await alter('newuser', 'havePlanet', 1, 'account', account);
  const newPlanetList = await findF('SELECT * FROM newplanet');
  console.log(newPlanetList);
  ctx.body = JSON.stringify(newPlanetList);
}
module.exports = {
  queren,
  registPlanet,
};
