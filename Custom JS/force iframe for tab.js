var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://unpkg.com/x-frame-bypass@1.0.2/x-frame-bypass.js';    
document.getElementsByTagName('head')[0].appendChild(script);
//tab named "Demo", set to iframe - replace "Demo" with your exact tab-name
var frame_Demo = document.getElementById('frame-Demo');
frame_Demo.outerHTML ='<iframe allow=\"clipboard-read; clipboard-write\" allowfullscreen=\"true\" frameborder=\"0\" id=\"frame-Demo\" data-name=\"Demo\" sandbox=\"allow-presentation allow-forms allow-same-origin allow-pointer-lock allow-scripts allow-popups allow-modals allow-top-navigation allow-downloads\" scrolling=\"auto\" src=\"https://daimn.tld/some.html\" is=\"x-frame-bypass\" class=\"iframe\"></iframe>';
