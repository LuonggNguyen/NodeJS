class NewsController {
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('Test !!');
  }
}

module.exports = new NewsController();
