const elements = document.querySelectorAll("main, section, header");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      const items = entry.target.querySelectorAll("h1, p, button, div, li, img, ul");
      items.forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.02}s`; // tez ketma-ket
      });

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));
