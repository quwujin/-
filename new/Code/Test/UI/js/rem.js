!(function(win, doc){
    function ss(){
        var size = (window.innerWidth / 750) * 100;
        doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px';
    }
    var evt = 'resize';
    var timer = null;
    win.addEventListener(evt,function(){
        clearTimeout(timer);
        timer = setTimeout(ss, 300);
    }, false);
    win.addEventListener("pageshow",function(e){
        if (e.persisted){             //读取缓存
            clearTimeout(timer);
            timer = setTimeout(ss, 300);
        }
    }, false);
    ss();
}(window, document));
// 静止微信设置字体
(function () {
    
    　　if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
    
    　　handleFontSize();
    
    　　} else {
    　　if (document.addEventListener) {
    
    　　　　document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
    
    　　} else if (document.attachEvent) {
    
    　　　　document.attachEvent("WeixinJSBridgeReady", handleFontSize);
    
    　　　　document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
    
    　　}
    
    }
    
    function handleFontSize() {
    
    　　// 设置网页字体为默认大小
    　　WeixinJSBridge.invoke('setFontSizeCallback', {
    
    　　'fontSize': 0
    
    　　});
    
    
    　　// 重写设置网页字体大小的事件
    　　WeixinJSBridge.on('menu:setfont', function () {
    
    　　　　WeixinJSBridge.invoke('setFontSizeCallback', {
    
    　　　　　　'fontSize': 0
    
    　　　　});
    
    　　});
    
    　　}
    })()

// 浏览器 调整字体
//     (function(doc, win) {
// //      用原生方法获取用户设置的浏览器的字体大小(兼容ie)
//     if(doc.documentElement.currentStyle) {
//         var user_webset_font=doc.documentElement.currentStyle['fontSize'];
//     }
//     else {
//         var user_webset_font=getComputedStyle(doc.documentElement,false)['fontSize'];
//     }
// //      取整后与默认16px的比例系数
//     var xs=parseFloat(user_webset_font)/16;
// //      设置rem的js设置的字体大小
//     var view_jsset_font,result_font;
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         clientWidth,
//         recalc = function() {
//             clientWidth = docEl.clientWidth;
//             if(!clientWidth) return;
//             if(!doc.addEventListener) return;
//             if(clientWidth<750){
// //              设置rem的js设置的字体大小
//                 view_jsset_font=100 * (clientWidth / 750);
// //              最终的字体大小为rem字体/系数
//                 result_font=view_jsset_font/xs;
// //              设置根字体大小
//                 docEl.style.fontSize = result_font + 'px';
//             }
//             else{
//                 docEl.style.fontSize = 100 + 'px';
//             }
//         };
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);