import Mock from 'mockjs'
// 登录
Mock.mock('/user/login', 'post', (req) => {
    // eslint-disable-next-line standard/object-curly-even-spacing
    const { email, password } = JSON.parse(req.body)
    if (email === 'zy191341@163.com' && password === '123456') {
        return {
            "code": 200,
            "msg": "登录成功",
        }
    } else if (email != 'zy191341@163.com' && password != '123456') {
        return {
            "code": 300,
            "msg": "参数错误",
        }
    }
})


// 注册
Mock.mock('/user/register', 'post', (req) => {
    let obj = JSON.parse(req.body);
    var arr = []
    arr = arr.concat(obj); // 将前台返回来的数据，拼接到数组中。
    return {
        data: {
            "code": 200,
            "msg": "注册成功",
        }
    }
})

// 重置密码验证邮箱
Mock.mock('/user/restpwd', 'post', (req) => {
    const { email } = JSON.parse(req.body)
    if (email === 'zy191341@163.com') {
        return {
            "code": 200,
            "msg": "邮箱验证成功",
        }
    } else if (email != 'zy191341@163.com') {
        return {
            "code": 300,
            "msg": "邮箱验证错误",
        }
    }

})

// 重置密码
Mock.mock('/user/rest', 'post', (req) => {
    const { pass, checkPass } = JSON.parse(req.body)
    if (pass === checkPass) {
        return {
            "code": 200,
            "msg": "重置密码成功",
        }
    } else {
        return {
            "code": 300,
            "msg": "重置密码失败",
        }

    }

})

// 添加用户信息
Mock.mock('/user/userinfo', 'post', (req) => {
    let obj = JSON.parse(req.body);
    var arr = []
    arr = arr.concat(obj); // 将前台返回来的数据，拼接到数组中。
    return {
        "code": 200,
        "msg": "添加成功",
    }
})