// common script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Version Update
    const currentVersion = "2.8.0";
    const versionElement = document.getElementById('app-version');
    if (versionElement) versionElement.innerText = `V [${currentVersion}]`;

    // 2. Fade Animation
    const faders = document.querySelectorAll('.fade');
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    faders.forEach(fader => observer.observe(fader));
});