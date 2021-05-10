// Alternate Parameter Method - Event Handlers
//
// ----------------------------------------------------------------------------
// This prevents the page from scrolling while rotating the cube
// ----------------------------------------------------------------------------
var divs = document.getElementsByTagName('div');
document.addEventListener('touchstart', touchStart);
document.addEventListener('touchend', touchEnd);
function touchStart(e) {
  // set overflow:hidden only when mouse is in cube div
  var x = Math.round(e.touches[0].clientX);
  var y = Math.round(e.touches[0].clientY);
  var width = parseInt(cube.style.width);
  var height = parseInt(cube.style.height);
  var rect = cube.getBoundingClientRect();
  var top = Math.round(rect.top);
  var left = Math.round(rect.left);
  if (x >= left && x <= left+width && y >= top && y <= top+height)
    divs[0].style.overflow = 'hidden';
}
function touchEnd() {
  divs[0].style.overflow = 'auto';
}
// ----------------------------------------------------------------------------
// This prevents the context menu from popping up when using right-click to rotate
// ----------------------------------------------------------------------------
// Method 1:
// Disable right-click context menu entirely
// document.addEventListener('contextmenu', function(e){e.preventDefault()}, false);
//
// Method 2:
// Allow right-click context menu outside of cube area
document.addEventListener('contextmenu', contextmenu_handler);
document.addEventListener('mousedown', mousedown);
var x, y;
function mousedown (e) {
  x = e.clientX;
  y = e.clientY;
} 
function contextmenu_handler(e) {
  // set preventDefault only when mouse is in cube div
  var width = parseInt(cube.style.width);
  var height = parseInt(cube.style.height);
  var rect = cube.getBoundingClientRect();
  var top = Math.round(rect.top);
  var left = Math.round(rect.left);
  if (x >= left && x <= left+width && y >= top && y <= top+height)
    e.preventDefault();
}
