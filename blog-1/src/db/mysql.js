const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

//创建连接
con.connect()


//执行sql查询
function exec(sql) { 
    return new Promise((resolve, reject) => { 
        con.query(sql, (error, result) => {
            if (error) {
                reject(error)
                return ;
            }
            resolve(result)
        })
    })
}

module.exports = {
    exec
}



