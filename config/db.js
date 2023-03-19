const mysql      = require('mysql');
const HOST = "localhost";
const USER_DB= "root";
const PASSWORD_DB = '';
const DATA_BASE = "portucomprausadb";
const db = mysql.createConnection({
  host     : HOST,
  user     : USER_DB,
  password : PASSWORD_DB,
  database : DATA_BASE,
  multipleStatements: true
});

module.exports = db;