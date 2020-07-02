<?php 

// 1、接收前端传来的数据
$user = $_POST['user'];
$pass = $_POST['pass'];
// 2、连接数据库
$conn = mysqli_connect("localhost","root","root00","hello");
// 3、执行sql语句
$result = mysqli_query($conn,"insert into vip(user,pass) value ('".$user."','".$pass."')");
                            //  "insert into vip(user,pass) value ('".$name."','".$pass."')"
// 4、关闭数据库
mysqli_close($conn);
// 3、响应结果 mysqli_fetch_all把结果进行转换
// $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);

if($result){
    echo "1";  //1表示登录成功
}else{
    echo "0"; //0 表示登录失败
}
?>