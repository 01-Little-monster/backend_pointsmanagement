const express = require('express')

// 插件
const cors = require('cors')
// 数据库
const mongo = require('./model/config/db')

// 路由文件
const home = require('./routes/home')
const ranking = require('./routes/ranking')
const exchange = require('./routes/exchange')
const profile = require('./routes/profile')
const corps = require('./routes/corps')
const user = require('./routes/user')
// server
const app = express()
// 数据库连接
mongo(app)

// 中间件挂载
// 处理req.body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// 处理文件上传 multer

app.use(cors()) // 跨域
// 路由挂载
app.use('/home', home)
app.use('/ranking', ranking) // 排位
app.use('/exchange', exchange)  // 交换
app.use('/profile', profile)
app.use('/corps', corps)  // 团队管理
app.use('/user', user)

app.listen(8080, () => console.log('server is running at port 8080'))
