// const { mongo } = require('mongoose')
const mongo = require('../config/db')
const User = require('./user')
const app = 0
mongo(app)
const text = User.aggregate(
  [
    {
      $project: {
        user_state:"0",
        user_id: "00221"
      }
    }
  ], function (err, docs) {
    if (err) {
        console.log(err);
        return;
    }
    const data = docs[0]
    console.log(data)
})
