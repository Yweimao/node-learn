const env = process.env.NODE_ENV; // 环境变量参数

//配置
let MYSQL_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'myblog'
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
}