"use strict";

// 光标离开用户名的文本框，开始做验证，首先前端验证格式是否正确，后端验证是否存在
$("#userId")[0].onblur = function () {
  // 1、前端验证正确性
  // isUser();
  hasUser(); // if (isRight[0] == 0) {
  //     // 2、到后端验证用户名是否存在
  // }
}; // 后端验证用户名是否存在


function hasUser() {
  ajax02({
    method: "post",
    url: "checkUser.php",
    params: "username=" + $("#userId").val(),
    callback: function callback(str) {
      // console.log(str);
      if (str == "1") {
        // isRight[0] = 0;
        // alert("用户名已存在");
        $("#userId")[0].nextElementSibling.style = "color:red;";
        $("#userId")[0].nextElementSibling.innerHTML = "不好意思，该用户名已经被使用了，请更换其它";
      } else if (str == "0") {
        // isRight[0] = 1;
        $("#userId")[0].nextElementSibling.innerHTML = "该用户名可以使用"; // alert("用户名可以使用")
      } else {
        alert("服务器出错了");
      }
    }
  });
}

$("#btnReg")[0].onclick = function () {
  // console.log("111")
  $.ajax({
    type: "POST",
    url: "reg.php",
    data: {
      "user": $("#userId").val(),
      "pass": $("#userPass").val()
    },
    success: function success(str) {
      console.log(str);

      if (str == "1") {
        alert("注册成功，请点击登录");
      } else if (str == "0") {
        alert("注册失败");
      }
    }
  });
};