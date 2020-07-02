




    //账号登录

    var yzm = document.querySelector('.yzm');
    var code = document.querySelector('.code')

    //验证码
    var $yzmnum = getCode(4)

    yzm.innerHTML = $yzmnum

    $('.code').click(function () {
        $('.yzm').html(getCode(4))
    })








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
