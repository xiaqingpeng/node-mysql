// get the client
const mysql = require("mysql");
const  Koa = require("koa");
// 创建一个Koa对象表示web app本身:
const app = new Koa();

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
  var sql1 = `SELECT * FROM person`;
  var sql2 = `SELECT * FROM frame`;
  let str1,str2


  //查
  connection.query(sql1, function (err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }

    str1=result
    console.log(result);
  
  });
  //查
  connection.query(sql2, function (err, result) {
    if (err) {
      console.log("[SELECT ERROR] - ", err.message);
      return;
    }

   str2=result
    console.log(result);
  
  });

  app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.body = [...str1,...str2];
 });
 // 在端口3000监听:
app.listen(3000);
  connection.end();
})();
