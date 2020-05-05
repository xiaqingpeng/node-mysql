
# mysql基础配置
## 启动数据库
  mysql.server start
## Node 连接数据库
``` 
 (async () => {
  //引入mysql包
  const mysql = require("mysql");
  //mysql 需要的配置
  const config ={
    host: "localhost",
    user: "root",
    database: "test", //数据库名
    password: "1994514Xia_",
    port:'3306'
  }
  //连接
  const connection = mysql.createConnection(config);
  connection.connect((err) => {
    // 连接失败捕获异常信息
    console.log(err);
  })())
``` 