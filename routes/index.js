var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Login', function(req, res){
  res.render('Login.ejs');
});

router.get('/RegPage', function(req, res){
  res.render('RegPage.ejs');
});

router.get('/ActivePage', function(req, res){
    res.render('ActivePage.ejs');
});

router.get('/RegPageUI', function(req, res){
    res.render('RegPageUI.ejs');
});

/*렌더링부분에서 문제생겼음. 여기서 google인증에서 -> 넘어오는부분 successdirect에서 activepageUI로  넘겨주면서
인증이 되었을 경우에  req.user에서 정보를 가져온다. 그리고, 그것들을 activepageui.ejs에서사용할수 있게 렌더링해준다.*/

router.get('/ActivePageUI', function(req, res){
  //res.render('ActivePageUI.ejs');
  console.log('/ActivePageUI 패스 요청됨.');

  // 인증된 경우, req.user 객체에 사용자 정보 있으며, 인증안된 경우 req.user는 false값임
  console.log('req.user 객체의 값');
  console.dir(req.user);

  // 인증 안된 경우
  if (!req.user) {
    console.log('사용자 인증 안된 상태임.');
    res.redirect('/');
  } else {
    console.log('사용자 인증된 상태임.');
    console.log('/ActivePageUI 패스 요청됨.');
    console.dir(req.user);

    if (Array.isArray(req.user)) {
      res.render('ActivePageUI.ejs', {user: req.user[0]._doc});
    } else {
      res.render('ActivePageUI.ejs', {user: req.user});
    }
  }

  console.log("============="+ req.user[0]);console.log("============="+ req.user[0]);console.log("============="+ req.user[0]);console.log("============="+ req.user[0]);
});

router.get('/ChatPage', function(req, res){
    res.render('ChatPage.ejs');
});

router.get('/ChatPage1', function(req, res){
    res.render('ChatPage1.ejs');
});

router.get('/devcamp', function(req, res){
    res.render('devcamp.ejs');
});

module.exports = router;
