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
// server
const app = express()
// 数据库连接
mongo(app)

// 中间件挂载
app.use(cors()) // 跨域
// 路由挂载
app.use('/home', home)
app.use('/ranking', ranking)
app.use('/exchange', exchange)
app.use('/profile', profile)
app.use('/corps', corps)

app.listen(8080, () => console.log('server is running at port 8080'))
