const mysql = require('mysql');

//创建连接
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'myblog'
})

//开始连接
con.connect();

//创建sql语句
const sql = 'select * from users';

//执行sql语句
con.query(sql, (error, result) => {
    if (error) {
        console.error(error)
    }
    console.log(result)
})

//关闭连接
con.end();