var obj= {
  "products": {
    "ca19.trial": {
      "expire_dt": "2099-03-04 04:40:09",
      "expire_ts": "4076023209",
      "active": true
    },
    "bypass": {
      "active": true,
      "expire_dt": "2099-03-04 04:40:09",
      "expire_ts": "4076023209",
      "comment": "ca19_trial"
    }
  },
  "limits": {
    "plates": 200,
    "quizzes": 200,
    "snippets": 50,
    "lectures": -1,
    "questions": 200,
    "groups": 5
  },
  "reg_unpaid": false,
  "content": {},
  "preferences": {
    "theme": 0,
    "version": 1.3,
    "features": {
      "hub": true,
      "auto_sync": true,
      "publicity": true,
      "beating_heart": true,
      "free_rotation": false,
      "model_updates": true
    },
    "toolsOrder": [
      1,
      27,
      4,
      5,
      7,
      32,
      31,
      3,
      28,
      6,
      19,
      20,
      18,
      22,
      29,
      30,
      23,
      24,
      25,
      26
    ],
    "uiFeatures": {
      "ar": true,
      "tabs": false,
      "tips": true,
      "grids": true,
      "tools": true,
      "record": false,
      "save_image": true,
      "save_screen": true
    }
  },
  "show_update_popup": true,
  "subscriptions": [],
  "upgrades": [],
  "bypasses": [
    {
      "expire": "2099-03-04 04:40:09",
      "comment": "ca19_trial",
      "active": true,
      "bypass_type": "ca19_trial",
      "expire_ts": "4076023209"
    }
  ],
  "bypass": {
    "expire": "2099-03-04 04:40:09",
    "comment": "ca19_trial",
    "active": true,
    "bypass_type": "ca19_trial",
    "expire_ts": "4076023209"
  },
  "show_welcome_button": false,
  "timestamp": "1646109794",
  "promo": {
    "windows": {
      "text": "",
      "url": ""
    }
  },
  "bypass_priority": {},
  "win_bundles": {
    "StuPlusLicense": "com.3D4Medical.CAWin.B2CStuPlusLicense",
    "EduLicense": "com.3D4Medical.CAWin3.EduLicense",
    "ProLicense": "com.3D4Medical.CAWin.B2CProLicense"
  },
  "win_store_ids": {
    "com.3D4Medical.CAWin.B2CStuPlusLicense": "9N35P1FPPPX2",
    "com.3D4Medical.CAWin3.EduLicense": "9P8KQW7V4LJQ",
    "com.3D4Medical.CAWin.B2CProLicense": "9P8SF46987QR"
  },
  "female_text": "Keep an eye out, the new Female model will be available on iPhone in late January 2018.",
  "hide_redeem": {
    "mac": [
      "8.4.0"
    ],
    "ipad": [
      "8.4.0"
    ],
    "iphone": [
      "8.4.0"
    ]
  },
  "show_redeem": true
};

$done({body: JSON.stringify(obj)});
