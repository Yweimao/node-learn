const loginCheck = (username, password) => {
    if (username == 'zhangsan' && password == '123123') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}