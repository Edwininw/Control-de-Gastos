document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeBtn = document.getElementById("toggle-theme");
    const body = document.body;

    // Comprobar si hay un tema guardado en localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    toggleThemeBtn.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Guardar la preferencia en localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
