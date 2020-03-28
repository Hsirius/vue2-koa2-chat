const mysql = require("mysql");
const db = require("../config/sql.js");

let connection = mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  port: db.port,
  database: db.database
});

module.exports = connection;