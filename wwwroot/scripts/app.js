
function getScrollOffset() {
  return {
    x: window.scrollX,
    y: window.scrollY
  };
}

function animate(fn) {
  requestAnimationFrame(function () { animate(fn); });
  fn();
}

function ready(fn) {
  if (document.readyState !== 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function run() {
  var status = document.getElementById('scroll-status');
  var updateStatus = function () {
    status.textContent = getScrollOffset().y;
  };
  animate(updateStatus);
}

ready(run);
