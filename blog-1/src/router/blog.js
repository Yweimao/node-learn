const {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
} = require('../controller/blog')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')


const handleBlogRouter = (req, res) => {

    const method = req.method;
    //获取id
    const id = req.query.id;
    //获取博客列表
    if (method === "GET" && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author, keyword)
        // return new SuccessModel(listData)
        const result = getList(author, keyword);
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    //获取博客详情
    if (method === 'GET' && req.path === '/api/blog/detail') {
        const listDetail = getDetail(id);
        return new SuccessModel(listDetail);
    }

    //新建一篇博客
    if (method === 'POST' && req.path === '/api/blog/new') {
        const postData = req.body;
        const data = newBlog(postData)
        return new SuccessModel(data)
    }

    //更新一篇博客
    if (method === 'POST' && req.path === '/api/blog/update') {
        let resdata = updateBlog(id, req.body)
        if (resdata) {
            return new SuccessModel()
        } else {
            return new ErrorModel('更新博客失败')
        }
    }

    //删除一篇博客
    if (method === 'POST' && req.path === '/api/blog/del') {
        let resData = delBlog(id)
        if (resData) {
            return new SuccessModel()
        } else {
            return new ErrorModel('删除博客失败')
        }
    }

}

module.exports = handleBlogRouter