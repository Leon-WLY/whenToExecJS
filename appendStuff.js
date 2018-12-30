// 为文档添加一个input按钮
var btn = document.createElement("input");
btn.type = "button";
btn.value = "异步";
var body = document.getElementsByTagName("body")[0];
body.appendChild(btn);