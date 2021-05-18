const connect = require('./connect');

async function findFV(queryString, values) {
  const connection = connect();
  const result = await connection.query_p(queryString, values);
  connection.end();
  return result;
}
async function findF(queryString) {
  const connection = connect();
  const result = await connection.query_p(queryString);
  connection.end();
  return result;
}

module.exports = { findFV, findF };
