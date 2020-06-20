$(function() {
    // $('#me').click(function(){
    //     $(this).toggleClass('min');
    //     $(this).toggleClass('max');
    // });
    $("#me").click(function(){
        var src = $("#me").attr("src");//获取src
        if(src!="./images/intro.jpg"){//判断是否是第一张图片
            $("#me").attr("src","./images/intro.jpg");//改变属性src
        }
        else
        $("#me").attr("src","./images/trick.jpg");
});
});