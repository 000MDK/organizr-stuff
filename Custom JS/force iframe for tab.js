var script1 = document.createElement('script');
script1.type = 'module';
script1.src = 'https://unpkg.com/x-frame-bypass';    
document.getElementsByTagName('head')[0].appendChild(script1);
var allframes = document.getElementsByTagName('iframe');
for(var i=0; i<allframes.length; i++){
    allframes[i].setAttribute('is', 'x-frame-bypass');
    allframes[i].removeAttribute('class');
    allframes[i].setAttribute('class', 'iframe');
}
var alllinks = document.getElementsByTagName('a');
for(var i=0; i<alllinks.length; i++){
    if (alllinks[i].getAttribute('onclick') !== null)
    {
        alllinks[i].setAttribute('onclick', alllinks[i].getAttribute('onclick') + 'location.reload\(\)\;');
    }
}
