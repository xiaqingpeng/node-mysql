// get the client
const mysql = require("mysql");
(async () => {
  // create the connection to database
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "test",
    password: "1994514Xia_",
    port:'3306'
  });
  connection.connect((err) => {
    console.log(err);
  });
  var sql = `SELECT * FROM person`;
  //查
  connection.query(sql, function (err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }

  
    console.log(result);
  
  });

  connection.end();
})();
