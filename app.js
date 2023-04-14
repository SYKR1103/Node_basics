const express = require("express");

//express를 실행해서 app 객체를 만듬
const app = express();
const port = 3000;

//내보내준 모듈을 갖고오기
//const명은 해당 페이지에서 사용할 것으로 재량껏 설정
// 파이썬의 import와 같은 기능
const goodsRouter = require("./routes/goods");
const itemRouter = require("./routes/items");
// 전역범위로 사용
// request안의 body를 사용하기 위하여 정의
// body-parser
app.use(express.json());

/*
// get 메소드로 api를 실행할 수 있게 한다.
//{ queryKey: 'VALUEVALUE' } 라는 객체 반환
app.get("/", (req, res) => {
  //쿼리스트링으로 된 정보를 출력
  console.log(req.query);
  //res.send("정상 반환합니다.");

  // 특정 HTTP코드 및 메시지를 전달할 수 있음
  res.status(400).json({
    'key' : 'key에요',
    "key2" : 'key2에요'
  })
})


//{ id: 'ㅁㄴㅇㄻㄴ' } 라는 객체 반환
app.get("/:id", (req, res) => {
    //쿼리스트링으로 된 정보를 출력
    console.log(req.params);
    res.send(":id URI 정상적으로 반환되었습니다.");
  });
*/

// use라는 항목을 사용하여 API를 등록
// 모든 미들웨어가 여기를 통과하도록 한다.
// 위의 코드들이 먼저 작동되고 이단계에 오므로 순서를 생각해야 한다.
// 해당 API로 접속한 경우에는 해당 router로 연결
app.use("/api", goodsRouter);
app.use("/", itemRouter)

// 3000번 포트로만 접속했을때만 서버를 열수있도록 한다.
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
