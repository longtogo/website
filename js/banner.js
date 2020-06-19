
//切换图片函数
function bannerImg(count,Img,dot) {
    //让索引为count的li元素显示出来,siblings其他li元素隐藏
    $(Img).eq(count).stop("slow").fadeIn().siblings("li").stop().fadeOut("slow");
    //切换当前索引的小圆点样式
    $(dot).eq(count).addClass("dot").siblings("li").removeClass("dot");
}

$(function () {
    var count = 0;
    var banImg = $(".banner ul li");
    var bandot = $(".banner ol li");
    
    //下一张
    $(".arrow-r").click(function () {
        count++;
        if (count == banImg.length) {
            count = 0;
        }
        bannerImg(count, banImg, bandot);
    });
    //上一张
    $(".arrow-l").click(function () {
        count--;
        if (count < 0) {
            count = banImg.length - 1;
        }
        bannerImg(count, banImg, bandot);
    });

    //小圆点控制轮播
    $(bandot).click(function () {
        count = $(this).index();
        bannerImg(count, banImg, bandot);
    })

    //定时器轮播
    var adTimer;
    adTimer = setInterval(function () {
        count++;
        if (count == banImg.length) {
            count = 0;
        }
        bannerImg(count, banImg, bandot);
    }, 3000);

    //鼠标移入停止轮播
    $(".banner").mouseover(function () {
        clearInterval(adTimer);
    });
    //鼠标移出开始轮播
    $(".banner").mouseout(function () {
        adTimer = setInterval(function () {
            count++;
            if (count == banImg.length) {
                count = 0;
            }
            bannerImg(count, banImg, bandot);
        }, 3000);
    });
}) 
