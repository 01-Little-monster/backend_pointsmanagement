const express = require('express')

// 插件
const cors = require('cors')

// 路由文件
const home = require('./routes/home')
// server
const app = express()
// 中间件挂载
app.use(cors()) // 跨域
// 路由挂载
app.use('/home', home)

app.listen(8080, () => console.log('server is running at port 8080'))
