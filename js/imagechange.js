$(function() {
    // $('#me').click(function(){
    //     $(this).toggleClass('min');
    //     $(this).toggleClass('max');
    // });
    $("#me").click(function(){
        var src = $("#me").attr("src");//获取src
        if(src!="images/intro.jpg"){
            $("#me").attr("src","images/intro.jpg");
        }
        else
        $("#me").attr("src","images/trick.jpg");
});
});