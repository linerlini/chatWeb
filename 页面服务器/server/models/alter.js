const mysql = require('mysql');
const connect = require('./connect');

async function alter(tableName, key, value, id, primaryKey) {
  const connection = connect();
  const queryString = mysql.format(`UPDATE ${tableName} SET ${key} = ? WHERE ${id} = ?;`, [value, primaryKey]);
  await connection.query_p(queryString);
  connection.end();
}

module.exports = alter;
