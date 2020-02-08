// code sources for browser detection:
// https://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
// https://stackoverflow.com/questions/17278770/how-do-i-detect-chromium-specifically-vs-chrome
var isFirefox = typeof InstallTrigger !== 'undefined';
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isSafari = /constructor/i.test(window.HTMLElement) || 
    (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })
    (!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isChromium = testChromium(); 
function testChromium() {
  for (var i=0; i < navigator.plugins.length; i++)
    if (navigator.plugins[i].name.substr(0,8) == 'Chromium')
      return true;
  return false;
}
// remaining code by Michael Feather:
var mouseIsDown = false;
var offsetX, offsetY; 
var dpr = devicePixelRatio;
document.addEventListener('contextmenu', contextmenu);
if (isEdge) {
  document.addEventListener('pointerdown', pointerdown);
  document.addEventListener('pointermove', pointermove);
  document.addEventListener('pointerup', pointerup);
}
else {
  document.addEventListener('mousedown', mousedown);
  document.addEventListener('mouseup', mouseup);
}
if (isChromium)
  document.addEventListener('mousemove', mousemove);
if (isIE || isSafari) {
  if (parent.document != document) {
    parent.document.addEventListener('mousemove', pmousemove);
    parent.document.addEventListener('mouseup', pmouseup); 
  }
}
function mousedown(e) {
  mouseIsDown = true;
  if (e.button == 2 && !isSafari)
    parent.document.addEventListener('contextmenu', contextmenu);
  if (isFirefox || isIE || isSafari) {
    e.preventDefault();
    pointerEventsOtherFrames('none');
  }
  if (isChromium)
    window.frameElement.style.pointerEvents = 'none'
  if (isIE || isSafari) {
    offsetX = e.screenX/dpr - e.clientX;
    offsetY = e.screenY/dpr - e.clientY;
  }
}
function mousemove(e) {
  e.preventDefault();
}
function pmousemove(e) {
  if (mouseIsDown) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('mousemove', true, false);
    event.clientX = e.screenX/dpr - offsetX;
    event.clientY = e.screenY/dpr - offsetY;
    document.dispatchEvent(event);
  }
}
function mouseup(e) {
  mouseIsDown = false;
  if (e.button == 2 && !isSafari)
    setTimeout(removeParentListener, 100);
  if (isFirefox || isIE || isSafari)
    pointerEventsOtherFrames('auto'); 
  if (isChromium)
    window.frameElement.style.pointerEvents = 'auto'
}
function pmouseup(e) {
  mouseIsDown = false;
  var event = document.createEvent('HTMLEvents');
  event.initEvent('mouseup', true, false);
  document.dispatchEvent(event);
  pointerEventsOtherFrames('auto');
} 
function contextmenu(e) {
  e.preventDefault();
  if (e.button == 2 && (isIE || isSafari)) 
    removeParentListener();
}
function removeParentListener() {
  parent.document.removeEventListener('contextmenu', contextmenu);
}
function pointerdown(e) { 
  mouseIsDown = true;
  e.preventDefault();
  offsetX = e.screenX/dpr - e.clientX;
  offsetY = e.screenY/dpr - e.clientY;
  var event = document.createEvent('HTMLEvents');
  event.initEvent('mousedown', true, false);
  event.clientX = e.clientX; 
  event.clientY = e.clientY;
  document.dispatchEvent(event);
}
function pointermove(e) {
  if (mouseIsDown) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('mousemove', true, false);
    event.clientX = e.screenX/dpr - offsetX; 
    event.clientY = e.screenY/dpr - offsetY;
    document.dispatchEvent(event);
  }
}
function pointerup(e) {
  mouseIsDown = false;
  var event = document.createEvent('HTMLEvents');
  event.initEvent('mouseup', true, false);
  document.dispatchEvent(event);
}
var iframes = parent.document.getElementsByTagName('iframe');
function pointerEventsOtherFrames(s) {
  for (var i=0; i < iframes.length; i++) 
    if (window.frameElement != iframes[i])
      iframes[i].style.pointerEvents = s;
}
