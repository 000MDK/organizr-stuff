//enables some sites to be loaded in iframe
//examples working: Plex app, converse, ycombinator/hacker news
//examples not working: google news, youtube, myjdownloader

var script1 = document.createElement('script');
script1.type = 'module';
script1.src = 'https://unpkg.com/x-frame-bypass';
document.getElementsByTagName('head')[0].appendChild(script1);
var allframes = document.getElementsByTagName('iframe');
for(var i=0; i<allframes.length; i++){
  if (allframes[i].getAttribute('sandbox') !== null ){    
    allframes[i].setAttribute('is', 'x-frame-bypass');
  }  
}
