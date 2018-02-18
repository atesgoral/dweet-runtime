var c = null;
var x = null;
var S = Math.sin;
var C = Math.cos;
var T = Math.tan;
var time = 0;
var frame = 0;

function R(r,g,b,a) {
  a = a === undefined ? 1 : a;
  return 'rgba(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ',' + a + ')';
}

window.addEventListener('load', function () {
  c = document.querySelector('#c');
  c.width = 1920;
  c.height = 1080;

  x = c.getContext('2d');

  function loop() {
    requestAnimationFrame(loop);

    time = frame / 60;

    if (time * 60 | 0 == frame - 1) {
      time += 0.000001;
    }

    frame++;

    u(time);
  }

  loop();
});
