module.exports = (req, res, next) => {
  // NotFound
  if(err.message) {
    res.status(404).send("抛出错误：" + err.message)
  } else {
    res.status(404).send("抛出错误：" + "NotFound")
  }
}
