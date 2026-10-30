
document.addEventListener("DOMContentLoaded", () => {

  // DARK / LIGHT MODE
  const themeButton = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
  }

  function updateThemeButton() {
    const isLight = document.body.classList.contains("light");
    themeButton.textContent = isLight ? "🌙" : "☀️";
  }

  updateThemeButton();

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    updateThemeButton();
  });

  // TASHKENT LIVE CLOCK
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      hour12: false
    });

    date.textContent = now.toLocaleDateString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }

  updateClock();
  setInterval(updateClock, 1000);

  // SMOOTH NAVIGATION
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  console.log("rajapboyev.dev is ready!");
});
