const {
    loginCheck
} = require('../controller/user')
const {
    SuccessModel,
    ErrorModel
} = require('../model/resModel')
const handleUserRouter = (req, res) => {
    const method = req.method;

    if (method === 'POST' && req.path === '/api/user/login') {
        const {
            username,
            password
        } = req.body;
        const data = loginCheck(username, password)
        if (data) {
            return new SuccessModel()
        } else {
            return new ErrorModel()
        }
    }
}

module.exports = handleUserRouter;