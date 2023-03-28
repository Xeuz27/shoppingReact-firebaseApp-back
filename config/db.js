const mysql      = require('mysql2');
const HOST = "aws-sa-east-1.connect.psdb.cloud";
const USER_DB= "2120jdbmgy5itljizjr3";
const PASSWORD_DB = 'pscale_pw_SjItqa8p18YlOBX8cJk4RgyumFRY5A8xg8CgjOTLyXb';
const DATA_BASE = "portucomprausadb";
const db = mysql.createConnection({
  host     : HOST,
  user     : USER_DB,
  password : PASSWORD_DB,
  database : DATA_BASE,
  multipleStatements: true,
  ssl:{
    rejectUnauthorized:false
  }
});
module.exports = db;



//local db
// const mysql      = require('mysql');
// const HOST = "localhost";
// const USER_DB= "root";
// const PASSWORD_DB = '';
// const DATA_BASE = "portucomprausadb";
// const db = mysql.createConnection({
//   host     : HOST,
//   user     : USER_DB,
//   password : PASSWORD_DB,
//   database : DATA_BASE,
//   multipleStatements: true
// });

