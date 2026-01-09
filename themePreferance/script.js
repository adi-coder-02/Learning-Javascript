const btn = document.getElementById("themeToggle");
const p = document.getElementById("statusText");

// Apply theme
function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
    p.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
    btn.checked = theme === "dark";
}

// Initial theme load
function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(prefersDark ? "dark" : "light");
    }
}

setInitialTheme();

// Listen for system theme change (ONLY if user hasn't chosen)
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
    }
});

// Toggle change
btn.addEventListener("change", () => {
    const theme = btn.checked ? "dark" : "light";
    applyTheme(theme);
    localStorage.setItem("theme", theme);
});
