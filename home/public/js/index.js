window.onload = function () {
    $(".main .right .myjiuxian").mouseenter(function () {
        $(this).find(".myjiu").css({"transform": "rotate(180deg)", "margin-left": "0px", "margin-top": "10px"})
        $(".main .right .myjiuxian").css({"background": "#fff"});
        $(".main .right .mydropdown").show();
    });
    $(".main .right .myjiuxian").mouseleave(function () {
        $(this).find(".myjiu").css({"transform": "rotate(360deg)", "margin-left": "5px", "margin-top": "0px"})
        $(".main .right .myjiuxian").css({"background": "#f2f2f2"});
        $(".main .right .mydropdown").hide();
    });
    // homebody的导航菜单
    $(".nav #catItem1").mouseenter(function () {
        $(".nav #catItem1").css({"background": "#ccc"});
        $(".nav .fenlei .menubox").show();
        $(".nav .fenlei .menubox").mouseenter(function () {
            $(".nav #catItem1").css({"background": "#ccc"});
            $(".nav .fenlei .menubox").show();
        })
    })
    $(".nav #catItem1").mouseleave(function () {
        $(".nav #catItem1").css({"background": "#fff"});
        $(".nav .fenlei .menubox").hide();
        $(".nav .fenlei .menubox").mouseleave(function () {
            $(".nav #catItem1").css({"background": "#fff"});
            $(".nav .fenlei .menubox").hide();
        })
    })
    //        轮播
    var oUl = document.getElementsByClassName("bigUl")[0];
    var oLi = oUl.getElementsByTagName("li");
    var smUl = document.getElementsByClassName("smUl")[0];
    var smLi = smUl.getElementsByTagName("li");
    var len = oLi.length;
    var mainBanner = document.getElementsByClassName("mainBanner")[0];
    var now = 0;
//        小按钮点击时触发函数
    for (var i = 0; i < len; i++) {
        smLi[i].index = i;
        smLi[i].onclick = function () {
            if (now == this.index) return;
            now = this.index;
            tb();
        }
        //        小按钮被鼠标移入时触发函数
        smLi[i].onmouseover = function () {
            now = this.index;
            tb();
        }
        smLi[i].onmouseout = function () {
            now = this.index;
            tb();
        }
    }

//        小按钮背景变换和大图透明度变换函数
    function tb() {
        for (var i = 0; i < len; i++) {
            smLi[i].style.background = "black";
            oLi[i].style.display = "none";
            startMove(oLi[i], 0, "opacity");
        }
        oLi[now].style.display = "block";
        startMove(oLi[now], 100, "opacity");
        smLi[now].style.background = "red";
    }

//设置定时器图片自己滚动
    var timer = setInterval(function () {
        now++;
        if (now == len) {
            now = 0;
        }
        tb();
    }, 2000)
    mainBanner.onmouseover = function () {
        clearInterval(timer);
    }
    mainBanner.onmouseout = function () {
        timer = setInterval(function () {
            now++;
            if (now == len) {
                now = 0;
            }
            tb();
        }, 2000);
    }

//   疯狂选购
    var crazyShopU = document.getElementsByClassName("navU")[0];
    var crazyShopL = crazyShopU.getElementsByTagName("li");
    var crazyShopLength = crazyShopL.length;
    var crazyShopIntro = document.getElementsByClassName("intro")[0];
    var crazyShopIntroD = crazyShopIntro.getElementsByClassName("introItem");
    $(".indexTabBox .nav li").mouseover(function () {
        $(".indexTabBox .nav li").css({"background": "#ccc", "color": "black", "border-top": "1px solid #ccc"});
        $(this).css({"background": "#fff", "color": "red", "border-top": "1px solid red"});

    })
    for (var i = 0; i < crazyShopLength; i++) {
        crazyShopL[i].index = i;
        crazyShopL[i].onmouseover = function () {
            for (var i = 0; i < crazyShopLength; i++) {
                crazyShopIntroD[i].style.display = "none";
            }
            crazyShopIntroD[this.index].style.display = "block";
        }
    }
//        疯狂选购RightStart
    var indexTabNewNavItem = document.getElementsByClassName("indexTabNewNavItem")[0];
    var indexTabNewNavItemL = indexTabNewNavItem.getElementsByTagName("li");
    var indexTabNewBoxItem = document.getElementsByClassName("indexTabNewBoxItem");
    $(".indexTabNewNav li").mouseover(function () {
        $(".indexTabNewNav li").css({"background": "#ccc", "color": "black", "border-top": "1px solid #ccc"});
        $(this).css({"background": "#fff", "color": "red", "border-top": "1px solid red", "border-bottom": "none"});
    })
    for (var i = 0; i < 2; i++) {
        indexTabNewNavItemL[i].index = i;
        indexTabNewNavItemL[i].onmouseover = function () {
            for (var i = 0; i < 2; i++) {
                indexTabNewBoxItem[i].style.display = "none";
            }
            indexTabNewBoxItem[this.index].style.display = "block";
        }
    }
//        第一个小图片轮播Start
    var indexTabAdOne = document.getElementsByClassName("indexTabAdOne")[0];
    var smallPptBtnUl = document.getElementsByClassName("indexTabAdOneBtnUl")[0];
    var smallPptBtnL = smallPptBtnUl.getElementsByTagName("li");
    var indexTabAdImg = document.getElementsByClassName("indexTabAdImg")[0];
    var indexTabAdTwoImgItem = document.getElementsByClassName("indexTabAdTwoImgItem")[0];
    var smallBtnNumber = 0;
    var w = indexTabAdTwoImgItem.offsetWidth;
    for (var i = 0; i < smallPptBtnL.length; i++) {
        smallPptBtnL[i].index = i;
        smallPptBtnL[i].onclick = function () {
            if (smallBtnNumber == this.index) return;
            smallBtnNumber = this.index;
            for (var i = 0; i < 3; i++) {
                smallPptBtnL[i].style.background = "#66afe9";
            }
            smallPptBtnL[this.index].style.background = "#ccc";
            startMove(indexTabAdImg, -smallBtnNumber * w, "left");
        }
    }

    function next() {
        smallBtnNumber++;
        if (smallBtnNumber == 3) {
            smallBtnNumber = 0;
        }
        for (var i = 0; i < 3; i++) {
            smallPptBtnL[i].style.background = "#66afe9";
        }
        smallPptBtnL[smallBtnNumber].style.background = "#ccc";
        startMove(indexTabAdImg, -smallBtnNumber * w, "left");
    }

    var timer2 = setInterval(next, 3000);
    indexTabAdOne.onmouseover = function () {
        clearInterval(timer2);
    }
    indexTabAdOne.onmouseout = function () {
        timer2 = setInterval(next, 3000);
    }
//        第一个小图片轮播end
//              疯狂选购RightEnd
//        悬浮层一层限时抢购区start
    var timeLimitNumber = 0;
    var page = document.getElementsByClassName("pageItemA");
    var timeLimitListWrap = document.getElementsByClassName("timeLimitListWrap")[0];
    var timeLimitListWrapItem = timeLimitListWrap.getElementsByClassName("timeLimitListWrapItem");
    var timeLimitListWrapItemLen = timeLimitListWrapItem[0].offsetWidth;
    $(".raceLeft").click(function () {
        timeLimitNumber--;
        console.log(timeLimitNumber, 12)
        if (timeLimitNumber == -1) {
            timeLimitNumber = 0;
            return;
        }
        console.log(timeLimitNumber, 12)
        startMove(timeLimitListWrap, -timeLimitNumber * timeLimitListWrapItemLen, "marginLeft");
        console.log(timeLimitListWrap.style.marginLeft, 13)
    })
    $(".raceRight").click(function () {
        timeLimitNumber++;
        if (timeLimitNumber == 3) {
            timeLimitNumber = 2;
            return;
        }
        startMove(timeLimitListWrap, -timeLimitNumber * timeLimitListWrapItemLen, "marginLeft");
    })
    for (var i = 0; i < 3; i++) {
        page[i].index = i;
        // console.log(page[i])
        page[i].onclick = function () {
            for (var i = 0; i < 3; i++) {
                page[i].style.background = "#ccc";
            }
            page[this.index].style.background = "red";
            startMove(timeLimitListWrap, -this.index * timeLimitListWrapItemLen, "marginLeft");
        }
    }

//        倒计时函数start
    function leftTimer(number, year, month, day, hour, minute, second) {
        var obj = document.getElementsByClassName("timeLimitSetInterval");
        obj[number].timer = setInterval(function () {
            var leftTime = new Date(year, month - 1, day, hour, minute, second) - new Date();
            if (leftTime >= 0) {
                var days = parseInt(leftTime / 1000 / 60 / 60 / 24)    //获取剩余天数；
                var hours = parseInt(leftTime / 1000 / 60 / 60);  //获取总共剩余小时；
                var minutes = parseInt(leftTime / 1000 / 60 % 60);  //获取总共剩余分钟；
                var seconds = parseInt(leftTime / 1000 % 60);  //获取总共剩余秒钟；
                hours = checkTime(hours);
                minutes = checkTime(minutes);
                seconds = checkTime(seconds);
                obj[number].getElementsByClassName("hour")[0].innerHTML = hours;
                obj[number].getElementsByClassName("minute")[0].innerHTML = minutes;
                obj[number].getElementsByClassName("second")[0].innerHTML = seconds;
            }
            else {
                clearInterval(obj[number].timer);
                obj[number].innerHTML = "";
            }
        }, 1000);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    leftTimer(0, 2018, 1, 14, 22, 22, 0);
    leftTimer(1, 2018, 1, 15, 22, 22, 0);
    leftTimer(2, 2018, 1, 13, 22, 22, 0);
    leftTimer(3, 2018, 1, 18, 22, 22, 0);
    leftTimer(4, 2018, 1, 16, 22, 22, 0);
    leftTimer(5, 2018, 1, 17, 22, 22, 0);
//        倒计时函数end
//        白酒轮播start (无缝滚动附加缓冲、停顿、按钮点击后轮播)
    var baiJiuProductPptWrap = document.getElementsByClassName("baiJiuProductPptWrap")[0];
    var baiJiuProductPptUl = baiJiuProductPptWrap.getElementsByTagName("ul")[0];
    var baiJiuProductPptBtn = document.getElementsByClassName("baiJiuProductPptBtn")[0];
    var baiJiuProductPptBtnUl = baiJiuProductPptBtn.getElementsByTagName("ul")[0];
    var baiJiuProductPptBtnLi = baiJiuProductPptBtnUl.getElementsByTagName("li");
    var baiJiuProductLiNumber = 0;
    var y = null;
    var x = 0;

    function baiJiuLunBoNext() {
        y = y - 210;
        if (baiJiuProductPptUl.style.marginLeft == "-630px") {
            baiJiuProductPptBtnLi[0].style.background = "#8a6d3b";
            baiJiuProductPptUl.style.marginLeft = "0px";
        }
        else {
            for (var i = 0; i < baiJiuProductPptBtnLi.length; i++) {
                baiJiuProductPptBtnLi[i].style.background = "#fff";
            }
            if (baiJiuProductLiNumber >= 2) {
                baiJiuProductPptBtnLi[0].style.background = "#8a6d3b";
            }
            else {
                // x=baiJiuProductLiNumber+1;
                // console.log(baiJiuProductPptBtnLi[baiJiuProductLiNumber + 1].style,baiJiuProductPptBtnLi,baiJiuProductLiNumber);
                baiJiuProductPptBtnLi[baiJiuProductLiNumber + 1].style.background = "#8a6d3b"
            }
            startMove2(baiJiuProductPptUl, y, "marginLeft");
        }
        baiJiuProductLiNumber++;
        if (baiJiuProductLiNumber > 3) {
            baiJiuProductLiNumber = 1;
            y = -210;
            for (var i = 0; i < baiJiuProductPptBtnLi.length; i++) {
                baiJiuProductPptBtnLi[i].style.background = "#fff";
            }
            baiJiuProductPptBtnLi[baiJiuProductLiNumber].style.background = "#8a6d3b";
            startMove2(baiJiuProductPptUl, y, "marginLeft");
        }
    }
    // console.log("baiJiuProductPptBtnLi",baiJiuProductPptBtnLi);
    for (var i = 0; i < baiJiuProductPptBtnLi.length; i++) {
        baiJiuProductPptBtnLi[i].index = i;
        baiJiuProductPptBtnLi[i].onclick = function () {
            y = -(this.index * 210);
            baiJiuProductLiNumber = this.index;
            clearInterval(baiJiuProductPptWrap.timer);
            for (var i = 0; i < baiJiuProductPptBtnLi.length; i++) {
                baiJiuProductPptBtnLi[i].style.background = "#fff";
            }
            this.style.background = "#8a6d3b";
            startMove2(baiJiuProductPptUl, y, "marginLeft");
        }
    }
    baiJiuProductPptWrap.timer = setInterval(baiJiuLunBoNext, 2000);
    baiJiuProductPptWrap.onmouseover = function () {
        clearInterval(baiJiuProductPptWrap.timer);
    }
    baiJiuProductPptWrap.onmouseout = function () {
        baiJiuProductPptWrap.timer = setInterval(baiJiuLunBoNext, 2000);
    }
//        白酒轮播end
//    白酒本周热销区start
    var baiJiuHotSaleNavListUl = document.getElementsByClassName("baiJiuHotSaleNavListUl")[0];
    var baiJiuHotSaleNavListLi = baiJiuHotSaleNavListUl.getElementsByTagName("li");
    var baiJiuHotSaleProduct = document.getElementsByClassName("baiJiuHotSaleProduct")[0];
    var baiJiuHotSaleProductUl = baiJiuHotSaleProduct.getElementsByTagName("ul");
    // for(var i=0;i<5;i++){
    //     baiJiuHotSaleNavListLi[i].index=i;
    //     baiJiuHotSaleNavListLi[i].onclick=function(){
    //         for(var i=0;i<3;i++){
    //             baiJiuHotSaleProductUl[i].style.display="none";
    //         }
    //         for(var i=0;i<6;i++){
    //             baiJiuHotSaleNavListLi[i].style.color="black";
    //         }
    //         baiJiuHotSaleNavListLi[this.index].style.color="red";
    //         baiJiuHotSaleProductUl[(this.index)/2].style.display="block";
    //     }
    //     i=i+1;
    // }
    for (var i = 0; i < 5; i++) {
        baiJiuHotSaleNavListLi[i].index = i;
        baiJiuHotSaleNavListLi[i].onmouseover = function () {
            // console.log(12)
            for (var i = 0; i < 3; i++) {
                baiJiuHotSaleProductUl[i].style.display = "none";
            }
            for (var i = 0; i < 6; i++) {
                baiJiuHotSaleNavListLi[i].style.color = "black";
            }
            baiJiuHotSaleNavListLi[this.index].style.color = "red";
            baiJiuHotSaleProductUl[(this.index) / 2].style.display = "block";
        }
        i = i + 1;
    }
//    白酒本周热销区end
//    楼层悬浮start
    var fixDiv = document.getElementsByClassName("fixDiv")[0];
    var floorOneTop = document.getElementById("floorOne").offsetTop;
    var floorTwoTop = document.getElementById("floorTwo").offsetTop;
    var floorThreeTop = document.getElementById("floorThree").offsetTop;
    var floorItemOn = document.getElementsByClassName("floorItemOn");
    var floorItemBg = document.getElementsByClassName("floorItemBg");
    var floorWrap = document.getElementsByClassName("floorWrap");
    for (var i = 0; i < floorItemOn.length; i++) {
        floorWrap[i].index = i;
        floorWrap[i].onmouseover = function () {
            floorItemOn[this.index].style.display = "block";
            floorItemBg[this.index].style.opacity = "0";
            startMove(floorItemOn[this.index], 80, "width", floorItemBg[this.index]);
            for (var i = 0; i < floorItemOn.length; i++) {
                if (this.index == 0) {
                    floorItemOn[this.index].innerHTML = "白酒馆";
                } else if (this.index == 1) {
                    floorItemOn[this.index].innerHTML = "葡萄馆";
                } else if (this.index == 2) {
                    floorItemOn[this.index].innerHTML = "洋酒馆";
                }
            }
            floorItemOn[this.index].style.textDecoration = "none";
        }
        floorWrap[i].onmouseout = function () {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop < floorOneTop) {
                for (var i = 0; i < floorItemOn.length; i++) {
                    if (this.index == 0) {
                        startMove5(floorItemOn[this.index], 30, "width", "1F");
                    } else if (this.index == 1) {
                        startMove4(floorItemOn[this.index], 30, "width", "2F", this.index);
                    } else if (this.index == 2) {
                        startMove4(floorItemOn[this.index], 30, "width", "3F", this.index);
                    }
                }
            } else if (scrollTop < floorTwoTop && scrollTop > floorOneTop) {
                for (var i = 0; i < floorItemOn.length; i++) {
                    if (this.index == 0) {
                        startMove5(floorItemOn[this.index], 30, "width", "1F");
                    } else if (this.index == 1) {
                        startMove4(floorItemOn[this.index], 30, "width", "2F", this.index);
                    } else if (this.index == 2) {
                        startMove4(floorItemOn[this.index], 30, "width", "3F", this.index);
                    }
                }
            } else if (scrollTop < floorThreeTop) {
                for (var i = 0; i < floorItemOn.length; i++) {
                    if (this.index == 0) {
                        startMove4(floorItemOn[this.index], 30, "width", "1F", this.index);
                    } else if (this.index == 1) {
                        startMove5(floorItemOn[this.index], 30, "width", "2F");
                    } else if (this.index == 2) {
                        startMove4(floorItemOn[this.index], 30, "width", "3F", this.index);
                    }
                }
            } else {
                for (var i = 0; i < floorItemOn.length; i++) {
                    if (this.index == 0) {
                        startMove4(floorItemOn[this.index], 30, "width", "1F", this.index);
                    } else if (this.index == 1) {
                        startMove4(floorItemOn[this.index], 30, "width", "2F", this.index);
                    } else if (this.index == 2) {
                        startMove5(floorItemOn[this.index], 30, "width", "3F");
                    }
                }
            }
        }
    }
    window.onscroll = function () {
        floorOnScroll();
    }

    function floorWhich(index) {
        for (var i = 0; i < floorItemOn.length; i++) {
            if (index == i) {
                floorItemOn[i].style.display = "block";
                floorItemBg[i].style.opacity = "0";
            } else {
                floorItemOn[i].style.display = "none";
                floorItemBg[i].style.opacity = "1";
            }
        }
    }

    function floorOnScroll() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop < floorOneTop) {
            if (fixDiv.style.display == "block") {
                $(".fixDiv").removeClass("animated fadeInDown").addClass('animated fadeInUp').css({"display": "none"});
            }
            fixDiv.style.display = "none";
        } else if (scrollTop < floorTwoTop && scrollTop > floorOneTop) {
            if (fixDiv.style.display == "none") {
                $(".fixDiv").css({"display": "block"}).removeClass("animated fadeInUp").addClass('animated fadeInDown');
            }
            fixDiv.style.display = "block";
            floorWhich(0);
        } else if (scrollTop < floorThreeTop) {
            floorWhich(1);
        } else {
            floorWhich(2);
        }
    }
    floorOnScroll();
//    楼层悬浮end
//        悬浮层一层限时抢购区end
//    logo墙start
    var logoBox=document.getElementsByClassName("logoBox")[0];
    var logoBoxImg=logoBox.getElementsByTagName("img");
    var logoBoxImgLen=logoBoxImg.length;
    var logoBoxBtnLeft=document.getElementsByClassName("logoBoxBtnLeft")[0];
    var logoBoxBtnRight=document.getElementsByClassName("logoBoxBtnRight")[0];
    var logoWallImgWrap=document.getElementsByClassName("logoWallImgWrap")[0];
    var logoWallImgWrapUl=document.getElementsByClassName("logoWallImgWrapUl")[0];
    var titleBoxWrap=document.getElementsByClassName("titleBoxWrap")[0];
    var titleBoxWrapLi=titleBoxWrap.getElementsByTagName("li");
    var titleBoxWrapLiLen=titleBoxWrapLi.length;
    var titleSlider=document.getElementsByClassName("titleSlider")[0];
    var titleSliderB=titleSlider.getElementsByTagName("b")[0];
    var logoWallImg=document.getElementsByClassName("logoWallImg");
    var logoWallImgLen=logoWallImg.length;
    var logoWallImgWrapUlWidth=logoWallImgWrapUl.offsetWidth;
    var logoWallNumber=0;
    //    左右按钮点击start
    logoBoxBtnLeft.onclick=function(){
        logoWallNumber++;
        if(logoWallNumber==3){
            logoWallNumber=2;
        }
        startMove(logoWallImgWrap,-(logoWallImgWrapUlWidth + 20)*logoWallNumber,"marginLeft")
    }
    logoBoxBtnRight.onclick=function(){
        logoWallNumber--;
        if(logoWallNumber==-1){
            logoWallNumber=0;
        }
        startMove(logoWallImgWrap,-(logoWallImgWrapUlWidth + 20)*logoWallNumber,"marginLeft")
    }
//    左右按钮点击end
//    logo墙nav切换start
    for(var i=0;i<titleBoxWrapLiLen;i++){
        titleBoxWrapLi[i].index=i;
        titleBoxWrapLi[i].onmouseover=function(){
            titleSlider.style.left=(105*this.index)+"px";
            for(var i=0;i<logoWallImgLen;i++){
                logoWallImg[i].style.display="none";
            }
            logoWallImg[this.index].style.display="block";
        }
    }
//    logo墙nav切换end
//    logo墙li的MarginLeft变换start
    for(var i=0;i<logoBoxImgLen;i++){
        logoBoxImg[i].index=i;
        logoBoxImg[i].onmouseover=function(){
            startMove(logoBoxImg[this.index],-100,"marginLeft");
        }
        logoBoxImg[i].onmouseout=function(){
            startMove(logoBoxImg[this.index],0,"marginLeft");
        }
    }
//    logo墙li的MarginLeft变换end
//    logo墙end
//    footer邮箱start
    var footerTopNavRightEmail=document.getElementsByClassName("footerTopNavRightEmail")[0];
    var footerTopNavRightEmailInput=footerTopNavRightEmail.getElementsByTagName("input")[0];
    var emailSpan=document.getElementsByClassName("emailSpan")[0];
    footerTopNavRightEmailInput.onclick=emailSpan.onclick=function(){
        // footerTopNavRightEmailInput.onclick=true;
        emailSpan.style.display="none";
        footerTopNavRightEmailInput.focus();

    }
    footerTopNavRightEmailInput.onblur=emailSpan.onblur=function(){
        emailSpan.style.display="block";
    }
//    footer邮箱end
}