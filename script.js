// Calculate and display dynamic durations for experience timeline
function calculateDuration(startDate, endDate = null) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    let result = '';
    if (years > 0) {
        result += `${years} year${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
        if (result) result += ' ';
        result += `${months} month${months > 1 ? 's' : ''}`;
    }
    
    return result || '0 months';
}

// Convert month name to month number
function getMonthNumber(monthName) {
    const months = {
        'jan': '01', 'january': '01',
        'feb': '02', 'february': '02',
        'mar': '03', 'march': '03',
        'apr': '04', 'april': '04',
        'may': '05', 'may': '05',
        'jun': '06', 'june': '06',
        'jul': '07', 'july': '07',
        'aug': '08', 'august': '08',
        'sep': '09', 'september': '09',
        'oct': '10', 'october': '10',
        'nov': '11', 'november': '11',
        'dec': '12', 'december': '12'
    };
    
    return months[monthName.toLowerCase()] || '01';
}

// Parse date from format like "Mar 2022" to "2022-03"
function parseDateString(dateStr) {
    if (!dateStr) return null;
    
    if (dateStr.toLowerCase() === 'present') {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        return `${year}-${month}-01`;
    }
    
    const parts = dateStr.trim().split(' ');
    if (parts.length === 2) {
        const monthName = parts[0];
        const year = parts[1];
        const monthNum = getMonthNumber(monthName);
        return `${year}-${monthNum}-01`;
    }
    
    // Default format: assume YYYY-MM
    return dateStr + '-01';
}

function updateDurations() {
    const durationElements = document.querySelectorAll('.duration');
    console.log(`Found ${durationElements.length} duration elements`);
    
    durationElements.forEach((element, index) => {
        // Get data attributes directly - more reliable
        const startAttr = element.getAttribute('data-start');
        const endAttr = element.getAttribute('data-end');
        
        console.log(`Element ${index+1}:`, { 
            startAttr, 
            endAttr, 
            parentText: element.closest('.timeline-date')?.textContent 
        });
        
        if (!startAttr) {
            console.warn(`Missing data-start attribute for element ${index+1}`);
            return;
        }
        
        const startDate = `${startAttr}-01`; // Add day for valid date
        const endDate = endAttr ? `${endAttr}-01` : null;
        
        const duration = calculateDuration(startDate, endDate);
        console.log(`Calculated duration: ${duration} for dates: ${startDate} to ${endDate || 'present'}`);
        
        element.textContent = `(${duration})`;
    });
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(50px)';
    category.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(category);
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelector('input[type="text"]:nth-of-type(2)').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 2000);
});

// Add typing animation to hero title
const heroTitle = document.querySelector('.hero-text h1');
const titleText = heroTitle.textContent;
heroTitle.textContent = '';

let i = 0;
const typeWriter = () => {
    if (i < titleText.length) {
        heroTitle.textContent += titleText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
    updateDurations(); // Calculate and display dynamic durations
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add counter animation for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + (counter.textContent.includes('+') ? '+' : counter.textContent.includes('%') ? '%' : '');
                setTimeout(updateCounter, 40);
            } else {
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : counter.textContent.includes('%') ? '%' : '');
            }
        };
        
        updateCounter();
    });
};

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
    }
    
    const toggleTheme = () => {
        const currentTheme = body.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    };
    
    // Handle click events
    themeToggle.addEventListener('click', toggleTheme);
    
    // Handle keyboard events for accessibility
    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

// Initialize skill tooltips for touch devices and accessibility
function initSkillTooltips() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        // Add ARIA attributes for accessibility
        const tooltip = tag.getAttribute('data-tooltip');
        if (tooltip) {
            tag.setAttribute('role', 'button');
            tag.setAttribute('aria-label', tooltip);
            tag.setAttribute('tabindex', '0');
            
            // Handle keyboard interactions
            tag.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTooltipVisibility(tag, true);
                    
                    // Hide tooltip after a short delay
                    setTimeout(() => {
                        toggleTooltipVisibility(tag, false);
                    }, 2000);
                }
            });
            
            // Handle touch events for mobile
            tag.addEventListener('touchstart', (e) => {
                e.preventDefault();
                
                // Hide all other tooltips first
                skillTags.forEach(otherTag => {
                    if (otherTag !== tag) {
                        toggleTooltipVisibility(otherTag, false);
                    }
                });
                
                toggleTooltipVisibility(tag, true);
                
                // Hide tooltip after a short delay
                setTimeout(() => {
                    toggleTooltipVisibility(tag, false);
                }, 2000);
            });
        }
    });
}

// Toggle tooltip visibility manually
function toggleTooltipVisibility(element, show) {
    if (show) {
        element.classList.add('tooltip-visible');
        element.setAttribute('aria-expanded', 'true');
    } else {
        element.classList.remove('tooltip-visible');
        element.setAttribute('aria-expanded', 'false');
    }
}

// Career chart interactions
document.addEventListener('DOMContentLoaded', function() {
    // Setup career chart elements
    const skillPoints = document.querySelectorAll('.skill-point');
    const careerOrgs = document.querySelectorAll('.career-org');
    const milestones = document.querySelectorAll('.milestone');
    
    // Add accessibility to skill points
    skillPoints.forEach((point, index) => {
        // Make focusable and add keyboard navigation
        point.setAttribute('tabindex', '0');
        
        // Add aria attributes for accessibility
        if (point.dataset.tooltip) {
            point.setAttribute('role', 'button');
            point.setAttribute('aria-label', point.dataset.tooltip);
        }
        
        // Add to animation sequence
        setTimeout(() => {
            point.classList.add('appear');
        }, index * 100 + 500);
        
        // Add keyboard interaction
        point.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                // Toggle a class to show tooltip
                this.classList.toggle('tooltip-active');
                e.preventDefault();
            }
        });
        
        // Touch device handling - remove tooltip when clicked elsewhere
        document.addEventListener('click', function(e) {
            if (!e.target.classList.contains('skill-point')) {
                document.querySelectorAll('.skill-point.tooltip-active').forEach(active => {
                    active.classList.remove('tooltip-active');
                });
            }
        });
    });
    
    // Handle mobile touch interactions
    skillPoints.forEach(point => {
        point.addEventListener('touchstart', function(e) {
            e.preventDefault();
            
            // Remove active class from all other points
            document.querySelectorAll('.skill-point.tooltip-active').forEach(active => {
                if (active !== this) {
                    active.classList.remove('tooltip-active');
                }
            });
            
            // Toggle this point
            this.classList.toggle('tooltip-active');
        });
    });
    
    // Add entry animation for chart elements
    function animateChart() {
        if (!document.querySelector('.career-chart').classList.contains('animated')) {
            // Add entry animations with delays
            document.querySelectorAll('.career-org').forEach((org, index) => {
                setTimeout(() => {
                    org.classList.add('appear');
                }, index * 200);
            });
            
            document.querySelectorAll('.milestone').forEach((milestone, index) => {
                setTimeout(() => {
                    milestone.classList.add('appear');
                }, index * 150 + 500);
            });
            
            document.querySelectorAll('.skill-point').forEach((point, index) => {
                setTimeout(() => {
                    point.classList.add('appear');
                }, index * 100 + 1000);
            });
            
            document.querySelector('.career-chart').classList.add('animated');
        }
    }
    
    // Use Intersection Observer to trigger animations when chart comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateChart();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Start observing the chart container
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        observer.observe(chartContainer);
    }
});

// Vertical Career Chart interactions
document.addEventListener('DOMContentLoaded', function() {
    // Setup vertical career chart elements
    const careerBars = document.querySelectorAll('.career-bar');
    
    // Function to animate career bars with proper delay and staggering
    function animateCareerBars() {
        careerBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.classList.add('animate-in');
            }, 300 * index); // Staggered animation delay
        });
    }
    
    // Add animation when scrolling into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Trigger animation for the entire chart when it comes into view
                animateCareerBars();
                // Unobserve after triggering animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Observe the chart container, not individual bars
    const chartContainer = document.querySelector('.vertical-career-chart');
    if (chartContainer) {
        observer.observe(chartContainer);
    }
    
    // Add accessibility attributes to each bar
    careerBars.forEach(bar => {
        bar.setAttribute('tabindex', '0');
        const orgLabel = bar.querySelector('.org-label strong')?.textContent || '';
        const durationText = bar.querySelector('.duration-text')?.textContent || '';
        bar.setAttribute('aria-label', `${orgLabel}, ${durationText}`);
    });
    
    // Add hover effect to highlight current bar
    careerBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            careerBars.forEach(otherBar => {
                if (otherBar !== bar) {
                    otherBar.classList.add('dimmed');
                }
            });
        });
        
        bar.addEventListener('mouseleave', () => {
            careerBars.forEach(otherBar => {
                otherBar.classList.remove('dimmed');
            });
        });
        
        // Add keyboard interaction
        bar.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                // Toggle a focus class
                this.classList.toggle('keyboard-focus');
                e.preventDefault();
            }
        });
        
        bar.addEventListener('blur', function() {
            this.classList.remove('keyboard-focus');
        });
    });
});

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateDurations();
    initThemeToggle();
    initSkillTooltips();
    
    // Handle key achievements
    const achievements = document.querySelectorAll('.achievement');
    
    // Add accessibility to achievements
    achievements.forEach((achievement, index) => {
        // Make focusable and add keyboard navigation
        achievement.setAttribute('tabindex', '0');
        
        // Add aria attributes for accessibility
        if (achievement.dataset.tooltip) {
            achievement.setAttribute('role', 'button');
            achievement.setAttribute('aria-label', achievement.dataset.tooltip);
        }
        
        // Add to animation sequence
        setTimeout(() => {
            achievement.classList.add('appear');
        }, index * 200 + 1500);
        
        // Add keyboard interaction
        achievement.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                // Toggle a class to show tooltip
                this.classList.toggle('tooltip-active');
                e.preventDefault();
            }
        });
        
        // Touch device handling
        achievement.addEventListener('touchstart', function(e) {
            e.preventDefault();
            
            // Remove active class from all other achievements
            document.querySelectorAll('.achievement.tooltip-active').forEach(active => {
                if (active !== this) {
                    active.classList.remove('tooltip-active');
                }
            });
            
            // Toggle this achievement
            this.classList.toggle('tooltip-active');
        });
    });
});
