var script1 = document.createElement('script');
script1.type = 'text/javascript';
script1.src = 'https://unpkg.com/x-frame-bypass@1.0.2/x-frame-bypass.js';    
document.getElementsByTagName('head')[0].appendChild(script1);
//tab named "Demo", set to iframe - replace "Demo" with your exact tab-name
var frame_Demo = document.getElementById('frame-Demo');
if (frame_Demo !== null) { frame_Demo.outerHTML ='<iframe allow=\"clipboard-read; clipboard-write\" allowfullscreen=\"true\" frameborder=\"0\" id=\"frame-Demo\" data-name=\"Demo\" sandbox=\"allow-presentation allow-forms allow-same-origin allow-pointer-lock allow-scripts allow-popups allow-modals allow-top-navigation allow-downloads\" scrolling=\"auto\" src=\"https://daimn.tld/some.html\" is=\"x-frame-bypass\" class=\"iframe\"></iframe>'; }
/*
you may want to append
" onclick=location.reload();
to your URL in Settings/Tabs, so it's applied when you click the tab
example: https://something.wontloadinaniframe/ --> https://something.wontloadinaniframe/" onclick=location.reload();
Be aware, to change that back you need to edit organizr.db with sqllite!
 */
