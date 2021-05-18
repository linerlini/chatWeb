const connect = require('./connect');

async function add(tableName, valueList) {
  const connection = connect();
  const queryString = `INSERT INTO ${tableName} VALUES(?);`;
  const result = await connection.query_p(queryString, [valueList]);
  connection.end();
  return result;
}

module.exports = add;
