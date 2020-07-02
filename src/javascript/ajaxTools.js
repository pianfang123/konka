function ajax02(obj){
    let defaultObj = {
        method:"get",
        url:"reg.php",  //loadMore.php
        params:"",//"pageIndex=1"
        callback:null,
        isAsync:true
    };
    // 把参数obj和defaultObj进行合并
    for(let key in obj){
        defaultObj[key] = obj[key];
    }
    // ajax步骤
    // 1、创建对象
    let xhr = new XMLHttpRequest();
    // 2、设置请求的参数（请求方式，请求地址，请求参数，是否异步）
    // 1）、处理请求地址和参数
    let urlAndParams = defaultObj.url;
    if(defaultObj.method.toLowerCase()=="get" && defaultObj.params!=""){
        urlAndParams += "?"+defaultObj.params;
    }     
    xhr.open(defaultObj.method,urlAndParams,defaultObj.isAsync);

    // 3、设置回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            // &&运算符的运算规则； 
            // 同真为真，即：前面的表达式为真，那么还需要看看后面的表达式结果。
            // 一假为假：前面的表达式结果是假；那么后面的表达式就不参与运算了。
            // 此时的callback是show
            defaultObj.callback && defaultObj.callback(xhr.responseText);
        }
    }

    // 4、发送请求
    if(defaultObj.method.toLowerCase()=="get"){
        xhr.send();
    }else if(defaultObj.method.toLowerCase()=="post"){
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(defaultObj.params);
    }

}
