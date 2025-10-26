        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.style.padding = '0.8rem 0';
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.style.padding = '1.2rem 0';
            }
        });

        // Animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
            
            elements.forEach(element => {
                const position = element.getBoundingClientRect();
                
                // If element is in viewport
                if(position.top < window.innerHeight - 100) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            });
        }

        // Initialize element styles
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
            
            elements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Initial check
            animateOnScroll();
        });

        // Listen for scroll events
        window.addEventListener('scroll', animateOnScroll);
