// theme-toggle.js

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeToggleText(savedTheme);

    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateThemeToggleText(newTheme);
    });

    function updateThemeToggleText(theme) {
        const themeIcon = document.getElementById("theme-icon");
        const themeText = document.getElementById("theme-text");
        if (theme === "dark") {
            themeIcon.textContent = "🌜";
            themeText.textContent = "Dark Mode";
        } else {
            themeIcon.textContent = "🌞";
            themeText.textContent = "Light Mode";
        }
    }
});
