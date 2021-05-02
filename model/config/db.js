// 引入mongoose第三方数据库
const mongoose = require('mongoose')
const mongoUrl = 'mongodb://localhost/pointsmanagement'
module.exports = app => {
  // 连接数据库
  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Mongodb connected successfully'))
  .catch((err) => console.log('Mongodb connection failed' + err))
}
