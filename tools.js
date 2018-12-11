//①----封装函数实现JavaScript文件的动态加载
function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) { //IE
        script.onreadystatechange = function() {
            if (script.readyState == "loaded" || script.readyState == "complete") {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function() {
            callback();

        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
//使用方法如下：
// // loadScript("file.js", function(){
//     alert("file is loaded!");
// })


//②----封装函数实现