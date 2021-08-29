var obj= {
"message": "成功",
  "code": "success",
  "data": {
    "expireDate": "2021-01-19 11:24:31",
    "userProStatStatusEnum": "VALID",
    "userProInfoVO": {
      "subscribe": false,
      "subscribeExpiresDate": "2020-12-19 11:24:31",
      "expiredTime": "2021-01-19 11:24:31",
      "androidWithhold": false,
      "rightsNum": 12,
      "activeType": 3,
      "expiredDay": 222,
      "userProStatStatusEnum": "VALID",
      "placeholderVip": false,
      "subscribeButtonText": "立即开通 ¥178/年",
      "purchaseTotalValue": 494,
      "upgradeSvipCount": 0
    },
    "svipUserProInfo": {
      "subscribe": false,
      "subscribeExpiresDate": "1970-01-01 00:00:00",
      "expiredTime": "2099-09-05 12:02:06",
      "androidWithhold": false,
      "rightsNum": 13,
      "activeType": 6,
      "expiredDay": 7,
      "userProStatStatusEnum": "VALID",
      "placeholderVip": false,
      "subscribeButtonText": "新用户特惠 首月9元",
      "purchaseTotalValue": 782,
      "upgradeSvipCount": 0
    },
    "memberDiscount": false,
    "userProDiscountType": 12,
    "userProDiscountPromptType": 0,
    "promotionDiscountPromptType": 0,
    "remainExpiredDay": 0,
    "discountPrice": 21,
    "promotionPeriod": false,
    "upgradable": false,
    "displayUpgradeProduct": false
  }
};

$done({body: JSON.stringify(obj)});
