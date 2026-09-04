// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Small welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Asmitha's Portfolio 💙");
});