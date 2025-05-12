 document.addEventListener("DOMContentLoaded", () => {
    // Toggle dark mode
    document.getElementById("toggleTheme").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Navigation active state
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            links.forEach(l => l.classList.remove("active"));
            event.target.classList.add("active");
        });
    });

    // Dynamic content example
    const content = document.getElementById("content");
    const dynamicMessage = document.createElement("p");
    dynamicMessage.textContent = "This content was dynamically added with JavaScript!";
    content.appendChild(dynamicMessage);
});