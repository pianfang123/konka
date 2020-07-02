

window.onload = function () {


    //账号登录

    var yzm = document.querySelector('.yzm');
    var code = document.querySelector('.code')

    //验证码
    var $yzmnum = getCode(4)

    yzm.innerHTML = $yzmnum

    $('.code').click(function () {
        $('.yzm').html(getCode(4))
    })



    $("#btnLogin")[0].onclick = function () {

        if ($('#userId').val() === '' || $('#paddId').val() === '') {
            alert('请输入账号密码！！')
            return
        }

        if ($('.login-yanzheng').val() != $yzmnum.toLowerCase()) {
            alert('验证码错误，请重新输入！')
            return
        }




        let xhr = new XMLHttpRequest();


        xhr.open("post", "login.php", true);
        // console.log(xhr.open);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let result = xhr.responseText;
                console.log(result);
                if (result == "1") {
                    window.location.href = "index.html";
                    alert("登录成功！")
                } else if (result == "0") {
                    alert("账号或密码错误，请重新登录！");
                } else {
                    alert("服务器错误，请联系管理员！");
                }
            }
        }
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        let sendStr = `user=${$("#userId").val()}&pass=${$("#passId").val()}`;
        xhr.send(sendStr);
    }
}





//验证码
function getCode(n) {
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "A", "B", "C", "D", "E"];
    var verification = ''

    for (var i = 0; i < n; i++) {
        var index = parseInt(Math.random() * arr.length);
        verification += arr[index]
    }
    return verification
}
