//express라는 모듈을 변수화
const express = require("express");

//express안의 Router라는 함수를 불러와서 변수화
//해당 변수는 Router의 기능을 수행
const router = express.Router();

// 함수부분 : req, res로 정의된 함수를 작성
router.get("/", (req, res) => {
  res.send("default url setting");
});

// 해당 api를 호출해서 해당 router에 왔을때 해당 함수를 반환하게 된다.
router.get("/about", (req, res) => {
  res.send("about API에 도달했습니다.");
});

// 여기에서 작성한 내용을 app.js로 보내기
// router라는 변수로 내보내겠다!
// exports : 외부 모듈에서 해당 변수나 함수에 접근하도록함
module.exports = router;
