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

module.exports = {
    getList
}