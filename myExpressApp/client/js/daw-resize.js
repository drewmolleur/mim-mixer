(function () {
  function fit(canvasId) {
    const c = document.getElementById(canvasId);
    if (!c) return;
    const parent = c.parentElement;
    if (!parent) return;

    const rect = parent.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    const cssW = Math.max(320, Math.floor(rect.width));
    const cssH = Math.max(200, Math.floor(rect.height));

    c.style.width = cssW + "px";
    c.style.height = cssH + "px";

    const pxW = Math.floor(cssW * dpr);
    const pxH = Math.floor(cssH * dpr);

    if (c.width !== pxW) c.width = pxW;
    if (c.height !== pxH) c.height = pxH;
  }

  function run() {
    fit("waveCanvas");
    fit("myCanvas");
    fit("frontCanvas");
    window.dispatchEvent(new Event("resize"));
  }

  window.addEventListener("load", () => {
    run();
    setTimeout(run, 250);
    setTimeout(run, 800);
  });

  window.addEventListener("resize", () => {
    clearTimeout(window.__mimRSZ);
    window.__mimRSZ = setTimeout(run, 120);
  });
})();
