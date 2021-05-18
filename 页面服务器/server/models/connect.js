const mysql = require('mysql');
const util = require('util');

function connect() {
  const connection = mysql.createConnection({
    host: '119.29.189.246',
    user: 'root',
    password: 'lkk200033',
    database: 'socialapp',
  });
  connection.connect((err) => {
    if (err) {
      console.log('wrong');
    }
    console.log('成功连接数据库\n');
  });
  connection.query_p = util.promisify(connection.query);
  return connection;
}
module.exports = connect;
