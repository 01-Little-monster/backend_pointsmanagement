const expressJWT = require('express-jwt')

module.exports = expressJWT({
  secret: 'xiaoxiaoguai',
  algorithms: ['HS256']
}).unless({
  path: [ '/login/index' ]
})
