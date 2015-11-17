(function (window, document) {

  function getScrollOffsetY() {
    return window.scrollY;
  }

  function animate(fn) {
    requestAnimationFrame(function () { animate(fn); });
    fn();
  }

  function updateText(element, fn) {
    return function () {
      element.textContent = fn();
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
    animate(updateText(status, getScrollOffsetY));
  }

  ready(run);

}(window, document));
