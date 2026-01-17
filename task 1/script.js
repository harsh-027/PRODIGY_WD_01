document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 1. Scroll Effect: Change background and text color
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

 // 2. JavaScript Hover Effect (Strict requirement: "Change the color or style of a menu item when hovered")    
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            
            if (window.innerWidth > 768) {
                item.style.color = '#0091ff';
                item.style.textDecoration = 'underline';
                item.style.transform = 'scale(1.1)';
            }
        });

        item.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                // Revert to CSS
                item.style.color = '';
                item.style.textDecoration = '';
                item.style.transform = '';
            }
        });
    });

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animate hamburger to X (optional simple toggle)
            const bars = menuToggle.querySelectorAll('.bar');
            if (navLinks.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
                
                // Ensure navbar background is solid when menu is open
                navbar.classList.add('scrolled');
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
                
                // Revert navbar background if at top
                if (window.scrollY <= 50) {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const bars = menuToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
