const express = require("express");
const router = express.Router();

const items = [
  {
    itemId: 1,
    name: "상품1",
    thumURL:
      "https://m.zeross.co.kr/web/product/big/202105/4a8c4ddcd01b5e1875cbfeffd640899e.jpg",
    category: "shirt",
    price: "1000",
  },
  {
    itemId: 2,
    name: "상품2",
    thumURL:
      "https://m.zeross.co.kr/web/product/big/202105/4a8c4ddcd01b5e1875cbfeffd640899e.jpg",
    category: "pands",
    price: "2000",
  },
  {
    itemId: 3,
    name: "상품3",
    thumURL:
      "https://m.zeross.co.kr/web/product/big/202105/4a8c4ddcd01b5e1875cbfeffd640899e.jpg",
    category: "skirt",
    price: "3000",
  },
];

router.get("/goods", (req, res) => {
  // 키값과 value명이 같은 경우 아래와 같이 정의해도됨
  res.status(200).json({ items });
});

// 상세조회를 위하여 url parameter로 상품id로 상세 조회가 되도록함
// goods/:goodsId : 라는 요청시 id 값을 받아오고 이를 req.params에서 확인가능

router.get("/goods/:goodsid", (req, res) => {
  // 요청할때에 goodsId를 보내오므로, 그를 받아서 사용함
  // : 뒤에 정의한 대로 키가 생성되고, 할당된 값이 value로 사용됨
  // 객체로 반환되므로 {goodsid}로 정의
  const { goodsid } = req.params;

  const [result] = items.filter((item) => Number(goodsid) === item.itemId);

  res.status(200).json({ result });
});

module.exports = router;
