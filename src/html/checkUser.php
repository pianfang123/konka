<?php
    // 一、接收前端传来的数据
    $username = $_POST['username'];

    // 二、处理
    // 1、连接数据库
		 // 数据库连接地址，用户名，密码，库名
    $conn = mysqli_connect("localhost","root","root00","hello");
    // 2、执行sql语句
		// from 后面是  表名  字段名 =  前端传来的数据  上面=前面的  字段名 =  前端传来
    $result = mysqli_query($conn,"select * from vip where user='{$username}'");
    // echo "select * from user where name='{$username}'";
    // var_dump($result);
    // 3、关闭数据库
    mysqli_close($conn);

    // 三、响应结果
    // mysqli_fetch_all()函数，把结果进行转换
    $arr = mysqli_fetch_all($result, MYSQLI_ASSOC);
    // var_dump($arr);
    if(count($arr)==1){
        echo "1";
    }else{
        echo "0";
    }
?>