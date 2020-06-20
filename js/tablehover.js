window.onload = function () {
    var tfrow = document.getElementById('tfhover').rows.length;
    var tbRow = [];//把每行存到数组里
    for (var i = 1; i < tfrow; i++) {
        tbRow[i] = document.getElementById('tfhover').rows[i];
        tbRow[i].onmouseover = function () {//鼠标悬浮
            this.style.backgroundColor = '#f3f8aa';//改变背景颜色
        };
        tbRow[i].onmouseout = function () {//鼠标移出
            this.style.backgroundColor = '#ffffff';
        };
    }
};