document.addEventListener('DOMContentLoaded', () => {
    // Fade-in effect for sections
    const fadeInElements = document.querySelectorAll('.fade-in');
    const options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            fadeInOnScroll.unobserve(entry.target);
        });
    }, options);

    fadeInElements.forEach(element => {
        fadeInOnScroll.observe(element);
    });

    // Smooth scroll to sections
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Dark mode toggle (optional enhancement)
    const toggle = document.createElement('button');
    toggle.textContent = 'Dark Mode';
    toggle.style.position = 'fixed';
    toggle.style.bottom = '20px';
    toggle.style.right = '20px';
    toggle.style.padding = '10px 20px';
    toggle.style.backgroundColor = '#333';
    toggle.style.color = '#fff';
    toggle.style.border = 'none';
    toggle.style.cursor = 'pointer';
    document.body.appendChild(toggle);

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Typing effect for the home section
    const typedText = "HEY, I'M V H NIYAMATHULLA";
    const typeSpeed = 100;
    let currentIndex = 0;

    function typeWriter() {
        if (currentIndex < typedText.length) {
            document.querySelector('#home h1 b').innerHTML += typedText.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    typeWriter();

    // Social icons hover effect
    const socialIcons = document.querySelectorAll('.social-icons i');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.color = '#b30000';
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.2s ease-in-out';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.color = '';
            icon.style.transform = '';
        });
    });
});
