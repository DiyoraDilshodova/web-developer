VANTA.NET({
  el: "#your-element-selector",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x00ffff,       // chiziq rangi
  backgroundColor: 0x000000 // fon rangi
  
});
const btnUzb = document.getElementById("btn-uz");
const btnEng = document.getElementById("btn-en");

function setLanguage(lang) {
  const t = translations[lang];

  for (const key in t) {
    const el = document.getElementById(key);
    if (!el) continue;

    // Agar qiymat array bo‘lsa, <ul> ga <li> qo‘shamiz
    if (Array.isArray(t[key])) {
      el.innerHTML = "";
      t[key].forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        el.appendChild(li);
      });
    } else {
      el.textContent = t[key];
    }
  }
}

btnUzb.addEventListener("click", () => setLanguage("uz"));
btnEng.addEventListener("click", () => setLanguage("en"));

// Default til: uz
window.onload = () => setLanguage("uz");

