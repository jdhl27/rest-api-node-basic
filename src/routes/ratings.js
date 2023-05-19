const { Router } = require('express')
const router = Router();

const listRatings = require('../sample.json');
const listRatingsRecent = require('../sample-order.json');
// console.log(listRatings)

router.get('/ratings', (req, res) => {
  console.log(req.query.page);
  if (req.query.recent) {
    if (req.query.page) {
      res.json(listRatingsRecent[req.query.page - 1])
    } else {
      res.json(listRatingsRecent[0])
    }
  } else {
    if (req.query.page) {
      res.json(listRatings[req.query.page - 1])
    } else {
      res.json(listRatings[0])
    }
  }
})

module.exports = router;