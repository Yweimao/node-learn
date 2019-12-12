const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring')

// 处理post data 
const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return
        }
            
        if (req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }

        let postData = ''
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
}


const serverHandle = (req, res) => {
    const url = req.url;
    //获取请求url
    req.path = url.split('?')[0]
    //获取请求参数
    req.query = querystring.parse(url.split('?')[1])

    // 设置返回格式 JSON
    res.setHeader('Content-type', 'application/json')


    getPostData(req).then(postData => {
        req.body = postData
        //处理blog 路由
        // let blogData = handleBlogRouter(req, res)
        // if (blogData) {
        //     res.end(
        //         JSON.stringify(blogData)
        //     )
        //     return
        // }

        let blogResult =  handleBlogRouter(req, res)
        if (blogResult) { 
            blogResult.then(blogData => { 
                res.end(
                    JSON.stringify(blogData)
                )
            })
            return ;
        }

        //处理user 路由
        let userData = handleUserRouter(req, res)
        if (userData) {
            res.end(
                JSON.stringify(userData)
            )
            return
        }


        //未命中路由 返回404
        res.writeHead(404, {
            'Content-type': 'text/plain'
        })
        res.write('404 Not Found\n')
        res.end()
    })



}


module.exports = serverHandle

//process.env.NODE_ENV