let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("expire") !=-1) {
  obj["bypass"]["expire"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["bypass"]["comment"] = "ca19";
  obj["bypass"]["active"] = true;
  obj["bypass"]["bypass_type"] = "ca19";
  obj["bypass"]["expire_ts"] = "4096070058";
 /* 
  obj["bypasses"]["expire"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["bypasses"]["comment"] = "ca19";
  obj["bypasses"]["active"] = true;
  obj["bypasses"]["bypass_type"] = "ca19";
  obj["bypasses"]["expire_ts"] = "4096070058";
  obj["bypasses"][0]["expire"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["bypasses"][0]["comment"] = "ca19";
  obj["bypasses"][0]["active"] = true;
  obj["bypasses"][0]["bypass_type"] = "ca19";
  obj["bypasses"][0]["expire_ts"] = "4096070058"; 
  */
  obj["bypasses"] = [
    {
      "expire": "2099-10-19 05:14:18",
      "comment": "ca19",
      "active": true,
      "bypass_type": "ca19",
      "expire_ts": "4096070058"
    }
  ];
  obj["bypass"] = 
    {
      "expire": "2099-10-19 05:14:18",
      "comment": "ca19",
      "active": true,
      "bypass_type": "ca19",
      "expire_ts": "4096070058"
    };
  obj["permissions"]["embeds_maker"] = true;
  obj["permissions"]["lecture_maker"] = true;
  obj["permissions"]["video_converter"] = true;
  obj["permissions"]["lecture_reviewer"] = true;
  obj["permissions"]["recording_publisher"] = true;
  obj["is_test_user"] = true;
  obj["licenses"][0]["bundle"] = "ca19";
  obj["licenses"][0]["expire"] = "2099-10-19T05:14:18.874810Z";
  obj["licenses"][0]["active"] = true;
  obj["products"]["ca19.trial"]["active"] = true;
  obj["products"]["ca19.trial"]["expire_dt"] = "2099-10-19 05:14:18";
  obj["products"]["ca19.trial"]["expire_ts"] = "4096070058";
  obj["products"]["bypass"]["active"] = true;
  obj["products"]["bypass"]["expire_dt"] = "2099-10-19 05:14:18";
  obj["products"]["bypass"]["expire_ts"] = "4096070058";
  }
$done({body: JSON.stringify(obj)});
