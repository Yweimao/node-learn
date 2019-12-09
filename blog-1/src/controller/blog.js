const getList = (author, keyword) => {
    return [{
            id: 1,
            title: '标题A',
            createTime: 1574843873418,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            createTime: 1574843911423,
            author: 'lisi'
        }
    ]
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