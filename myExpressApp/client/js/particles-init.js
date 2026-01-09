window.addEventListener("load", () => {
  if (!window.particlesJS) return;

  particlesJS("particles-js", {
    particles: {
      number: { value: 42, density: { enable: true, value_area: 1000 } },
      color: { value: ["#ffffff", "#d9d9d9", "#aaaaaa"] },
      shape: { type: "circle" },
      opacity: { value: 0.22, random: true },
      size: { value: 2.0, random: true },
      line_linked: {
        enable: true,
        distance: 160,
        color: "#ffffff",
        opacity: 0.08,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 170, line_linked: { opacity: 0.12 } }
      }
    },
    retina_detect: true
  });
});
