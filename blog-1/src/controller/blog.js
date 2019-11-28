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
const newBlog = (postData) => {
    console.log('postdata', postData)
    return {
        id: '1'
    };
}
module.exports = {
    getList,
    getDetail,
    newBlog
}