var obj= {
  "message": "成功",
  "code": "success",
  "data": {
    "hasIntroOfferPeriod": true,
    "hasIntroPeriod": true,
    "hasSvipIntroOfferPeriod": true,
    "hasSvipIntroPeriod": true,
    "hasSubscribeProduct": false,
    "hasSvipSubscribeProduct": false
  }
};

$done({body: JSON.stringify(obj)});
