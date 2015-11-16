
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

function updateText(element) {
  return function () {
    element.textContent = getScrollOffset().y;
  };
}

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function run() {
  var status = document.getElementById('scroll-status');
  animate(updateText(status));
}

ready(run);
