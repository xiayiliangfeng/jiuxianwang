function getStyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name];
    }else{
        return getComputedStyle(obj,false)[name];
    }
}
function startMove(obj,iTarget,attr,obj2){
    clearInterval(obj.timer);
    if(obj2){
        clearInterval(obj2.timer);
    }
    obj.timer=setInterval(function(){
        var cur=0;
        if(attr=="opacity"){
            cur=Math.round(parseFloat(getStyle(obj,attr))*100);
//                cur=parseFloat(getStyle(obj,attr))*100;
        }else{
            cur=parseInt(getStyle(obj,attr));
        }
        var speed=(iTarget-cur)/20;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur==iTarget){
            clearInterval(obj.timer);
        }
        else{
            if(attr=="opacity"){
                obj.style[attr]=(cur+speed)/100;
                obj.style.filter="alpha(opacity:"+(cur+speed)+")";
            }else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },30)
}

function startMove2(obj,iTarget,attr){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var cur=0;
        if(attr=="opacity"){
            cur=Math.round(parseFloat(getStyle(obj,attr))*100);
//                cur=parseFloat(getStyle(obj,attr))*100;
        }else{
            cur=parseInt(getStyle(obj,attr));
        }
        var speed=(iTarget-cur)/8;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur==iTarget){
            clearInterval(obj.timer);
        }
        else{
            if(attr=="opacity"){
                obj.style[attr]=(cur+speed)/100;
                obj.style.filter="alpha(opacity:"+(cur+speed)+")";
            }else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },30)
}
function startMove3(obj,iTarget,attr,content){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var cur=0;
        if(attr=="opacity"){
            cur=Math.round(parseFloat(getStyle(obj,attr))*100);
//                cur=parseFloat(getStyle(obj,attr))*100;
        }else{
            cur=parseInt(getStyle(obj,attr));
        }
        var speed=(iTarget-cur)/8;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur==iTarget){
            clearInterval(obj.timer);
            obj.innerHTML=content;
            obj.style.display="none";
        }
        else{
            if(attr=="opacity"){
                obj.style[attr]=(cur+speed)/100;
                obj.style.filter="alpha(opacity:"+(cur+speed)+")";
            }else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },30)
}
function startMove4(obj,iTarget,attr,content,number){
    clearInterval(obj.timer);
    // clearInterval(obj.secondTimer);
    obj.timer=setInterval(function(){
        var cur=0;
        if(attr=="opacity"){
            cur=Math.round(parseFloat(getStyle(obj,attr))*100);
//                cur=parseFloat(getStyle(obj,attr))*100;
        }else{
            cur=parseInt(getStyle(obj,attr));
        }
        var speed=(iTarget-cur)/8;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur==iTarget){
            clearInterval(obj.timer);
            obj.innerHTML=content;
            var floorItemOn=document.getElementsByClassName("floorItemOn");
            var floorItemBg=document.getElementsByClassName("floorItemBg");
            for(var j=0;j<floorItemOn.length;j++){
                // floorItemBg[number].style.opacity="1";
                floorItemOn[number].style.display="none";
                obj.secondTimer=startMove(floorItemBg[number],100,"opacity");
            }
        }
        else{
            if(attr=="opacity"){
                obj.style[attr]=(cur+speed)/100;
                obj.style.filter="alpha(opacity:"+(cur+speed)+")";
            }else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },30)
}
function startMove5(obj,iTarget,attr,content){
    clearInterval(obj.timer);
    // clearInterval(obj.secondTimer);
    obj.timer=setInterval(function(){
        var cur=0;
        if(attr=="opacity"){
            cur=Math.round(parseFloat(getStyle(obj,attr))*100);
//                cur=parseFloat(getStyle(obj,attr))*100;
        }else{
            cur=parseInt(getStyle(obj,attr));
        }
        var speed=(iTarget-cur)/8;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(cur==iTarget){
            clearInterval(obj.timer);
            obj.innerHTML=content;
            // var floorItemOn=document.getElementsByClassName("floorItemOn");
            // var floorItemBg=document.getElementsByClassName("floorItemBg");
            // for(var j=0;j<floorItemOn.length;j++){
            //     // floorItemBg[number].style.opacity="1";
            //     floorItemOn[number].style.display="none";
            //     obj.secondTimer=startMove(floorItemBg[number],100,"opacity");
            // }
        }
        else{
            if(attr=="opacity"){
                obj.style[attr]=(cur+speed)/100;
                obj.style.filter="alpha(opacity:"+(cur+speed)+")";
            }else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },30)
}
