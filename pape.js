// Scroll doux vers les sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulaire contact (simulation)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message envoyé ! Merci pour votre intérêt. Je vous recontacte bientôt.');
    this.reset();
});

// Effet animation au scroll (optionnel)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Observer les sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(section);
});
