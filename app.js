const express = require('express')

// 插件
const cors = require('cors')
// 数据库
const mongo = require('./model/config/db')

// 错误处理文件
const NotFound = require('./controllers/notFound/notFound_handle')
const error = require('./controllers/error/error_handle')
// 路由文件
const homeRouter = require('./routes/home')
const rankingRouter = require('./routes/ranking')
const exchangeRouter = require('./routes/exchange')
const profileRouter = require('./routes/profile')
const corpsRouter = require('./routes/corps')
const userRouter = require('./routes/user')
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
app.use('/home', homeRouter)
app.use('/ranking', rankingRouter) // 排位
app.use('/exchange', exchangeRouter)  // 交换
app.use('/profile', profileRouter)
app.use('/corps', corpsRouter)  // 团队管理
app.use('/user', userRouter)

app.get('/', (req, res) => {
  throw new error('错误')
})

// 404 NotFound
app.use(NotFound)
// 全局错误处理中间件
app.use(error)


app.listen(8080, () => console.log('server is running at port 8080'))
