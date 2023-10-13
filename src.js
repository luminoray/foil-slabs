/* Add this at the beginning of JS */
(() => {
  let gradientElement = document.getElementById('rectColor');
  let glowElement = document.getElementById('rectGlow');
  let foilSpeed = document.getElementById('foilSpeed').value;

  function scrollGradient(angle) {
    const pi = Math.PI;

    if (angle > 2*pi) {
      angle -= 2*pi;
    }

    gradientElement.setAttribute('y', (Math.sin(angle) * 50 - 50) + '%');
    glowElement.setAttribute('y', (Math.sin(angle) * 50 - 50) + '%');

    setTimeout(function () {
      scrollGradient(angle + (foilSpeed/1000) * 2*pi);
    }, 20);
  }

  setTimeout(function () {
    scrollGradient(0);
  }, 20);
})();