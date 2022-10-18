var script1 = document.createElement('script');
script1.type = 'module';
script1.src = 'https://unpkg.com/x-frame-bypass';
var script2 = document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(script1);
var allframes = document.getElementsByTagName('iframe');
for(var i=0; i<allframes.length; i++){
  if (allframes[i].getAttribute('srcdoc') !== null){    
    allframes[i].removeAttribute('class');
    allframes[i].setAttribute('class', 'iframe');
    allframes[i].setAttribute('is', 'x-frame-bypass');
    var tmpsrccpy = allframes[i].getAttribute('src');
    allframes[i].removeAttribute('src');
    allframes[i].setAttribute('src', tmpsrccpy);
    if (allframes[i].getAttribute('sandbox') !== null){
        allframes[i].removeAttribute('sandbox');
    }
  }    
}
var alllinks = document.getElementsByTagName('a');
for(var i=0; i<alllinks.length; i++){
  if (alllinks[i].getAttribute('class') == 'waves-effect' || alllinks[i].getAttribute('class') == 'waves-effect active'){
    if (alllinks[i].getAttribute('onclick') !== null){
        alllinks[i].setAttribute('onclick', alllinks[i].getAttribute('onclick') + 'location.reload\(\)\;');
    }
  }
}
