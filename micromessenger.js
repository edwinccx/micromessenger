function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
var isAndroid =
    navigator.userAgent.indexOf("Android") > -1 ||
    navigator.userAgent.indexOf("Adr") > -1;
var isWeixin = /MicroMessenger/i.test(navigator.userAgent);
var winHeight =
    typeof window.innerHeight != "undefined"
        ? window.innerHeight
        : document.documentElement.clientHeight;
function loadHtml() {
    var div = document.createElement("div");
    div.id = "weixin-tip";
    div.innerHTML =
        '<p><img src="/static/img/live_weixin.png" alt="请在浏览器中打开"/></p>';
    document.body.appendChild(div);
}

function loadStyleText(cssText) {
    var style = document.createElement("style");
    style.rel = "stylesheet";
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(cssText));
    } catch (e) {
        style.styleSheet.cssText = cssText; //ie9以下
    }
    var head = document.getElementsByTagName("head")[0]; //head标签之间加上style样式
    head.appendChild(style);
}
var cssText =
    "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;} #weixin-tip p img{width: 100%;}";

if (isWeixin && isAndroid) {
    loadHtml();
    loadStyleText(cssText);
}