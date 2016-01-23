
function showVideo(o,s,w, h, t){ 
var _html = ''; 
if($.inArray(t, ['ogg', 'mp4', 'webm']) >= 0){ 
var _doc=document.getElementsByTagName('head')[0]; 
var script=document.createElement('script'); 
script.setAttribute('type','text/javascript'); 
script.setAttribute('src','http://html5media.googlecode.com/svn/trunk/src/html5media.min.js'); 
_doc.appendChild(script); 
script.onload=script.onreadystatechange=function(){ 
if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete'){ 
_html = '<video src="'+s+'" width="'+w+'" height="'+h+'" controls autobuffer >'; 
_html += '</video>'; 
$(o).css({"width":w+'px', 'height':h+'px', 'cursor':'default'}); 
$(o).html(_html); 
} 
script.onload=script.onreadystatechange=null; 
} 
}else{ //other like 3gp 
_html += '<object width="'+w+'" height="'+h+'" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab">'; 
_html += '<param name="src" value="'+s+'">'; 
_html += '<param name="controller" value="true">'; 
_html += '<param name="type" value="video/quicktime">'; 
_html += '<param name="autoplay" value="false">'; 
_html += '<param name="target" value="myself">'; 
_html += '<param name="bgcolor" value="black">'; 
_html += '<param name="pluginspage" value="http://www.apple.com/quicktime/download/index.html">'; 
_html += '<embed src="'+s+'" width="'+w+'" height="'+h+'" controller="true" autoplay="false" align="middle" bgcolor="black" target="myself" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/index.html"></embed>'; 
_html += '</object>'; 
$(o).css({"width":w+'px', 'height':h+'px', 'cursor':'default'}); 
$(o).html(_html); 
} 
} 