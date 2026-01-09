/* particles.js init — tuned to feel like Vice dhrk / Asteroidz */

window.addEventListener("load", () => {
  if (!window.particlesJS) return;

  particlesJS("particles-js", {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: ["#ffffff", "#b9b2ff", "#7c5cff", "#2ee59d"] },
      shape: { type: "circle" },
      opacity: { value: 0.35, random: true },
      size: { value: 2.2, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#7c5cff",
        opacity: 0.18,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.55,
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
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 170, line_linked: { opacity: 0.22 } },
        push: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
});
