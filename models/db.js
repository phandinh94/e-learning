const mysql2 = require("mysql2")

let pool = mysql.createPool({
    host: "127.0.0.1",
    database: "users_schemas",
    user: "root",
    password: "Nonghang301294",
});

module.exports = pool.promise();