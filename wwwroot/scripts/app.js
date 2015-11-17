(function (win, doc) {

  function getScrollOffsetY() {
    return win.scrollY;
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
    if (doc.readyState !== 'loading') {
      fn();
    } else {
      doc.addEventListener('DOMContentLoaded', fn);
    }
  }

  function run() {
    var status = doc.getElementById('scroll-status');
    animate(updateText(status, getScrollOffsetY));
  }

  ready(run);

}(window, document));
