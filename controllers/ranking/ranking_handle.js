const ranking_day = (req, res) => {
  res.send({
    message: '日榜'
  })
}
const ranking_week = (req, res) => {
  res.send({
    message: '周榜'
  })
}
const ranking_month = (req, res) => {
  res.send({
    message: '月榜'
  })
}
const ranking_year = (req, res) => {
  res.send({
    message: '年榜'
  })
}

module.exports = {
  ranking_day,
  ranking_week,
  ranking_month,
  ranking_year
}
