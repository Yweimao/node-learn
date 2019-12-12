const {
    exec
} = require('../db/mysql')
const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`
    //返回promise
    return exec(sql)
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        createTime: 1574843873418,
        author: 'zhangsan'
    }
}
const newBlog = (blogData = {}) => {
    return {
        id: '1'
    };
}

const updateBlog = (id, blogData = {}) => {
    //id 博客id blogData  博客内容
    return true
}

const delBlog = (id) => {
    console.log(id)
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}