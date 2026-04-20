// Enhanced loader with initial load effect
function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '1';
    loader.style.pointerEvents = 'all';
}

function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
    setTimeout(() => {
        loader.style.transition = 'none';
    }, 600);
}

// Initial page load animation (2s delay)
document.addEventListener('DOMContentLoaded', function() {
    // Show loader initially
    document.body.style.overflow = 'hidden';
    
    // Hide after 2s with stagger effect
    setTimeout(() => {
        hideLoader();
        document.body.style.overflow = 'auto';
    }, 1000);

    // Active nav
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a[href]').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-nav');
        }
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') && !this.getAttribute('href').startsWith('#')) {
                showLoader();
            }
        });
    });

    // Burger menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu when a link is clicked
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Create prettier navbar shadow & enhanced backgrounds
    createNavbarShadow();
    createAliveBackgrounds();
    createHarmonizedGlows();
});

// Navbar drop shadow for separation from background
function createNavbarShadow() {
    const style = document.createElement('style');
    style.id = 'navbar-shadow';
    style.textContent = `
        nav {
            box-shadow: 
                0 35px 70px -20px rgba(14, 165, 233, 0.3),
                0 15px 35px -10px rgba(0, 0, 0, 0.6),
                inset 0 1px 0 rgba(255, 255, 255, 0.15),
                0 0 30px rgba(14, 165, 233, 0.1);
            backdrop-filter: blur(28px) saturate(170%);
            border-bottom: 1px solid rgba(255, 255, 255, 0.15);
            background: rgba(17, 24, 39, 0.97) !important;
        }
        #mobile-menu {
            backdrop-filter: blur(36px) saturate(190%) !important;
            box-shadow: 
                0 25px 50px -15px rgba(0, 0, 0, 0.7),
                0 40px 80px -20px rgba(14, 165, 233, 0.25);
            background: rgba(15, 23, 42, 0.98) !important;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        nav a:hover {
            box-shadow: 0 0 20px rgba(14, 165, 233, 0.4);
        }
    `;
    if (!document.getElementById('navbar-shadow')) {
        document.head.appendChild(style);
    }
}

// Alive layered backgrounds - no flares, more dynamic gradients
function createAliveBackgrounds() {
    const style = document.createElement('style');
    style.id = 'alive-backgrounds';
    style.textContent = `
        /* Layer 1: Main animated gradient */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(14,165,233,0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(34,211,238,0.12) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(167,139,250,0.1) 0%, transparent 50%),
                linear-gradient(-45deg, #0f172a 0%, #1e293b 30%, #0ea5e940 50%, #22d3ee30 70%, #1a1a2e 100%);
            background-size: 400% 400%, 400% 400%, 400% 400%, 600% 600%;
            animation: bgShift 18s ease infinite, radialFloat 25s ease-in-out infinite;
            z-index: -2;
            pointer-events: none;
        }

        /* Layer 2: Subtle shimmer */
        body::after {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 200%;
            height: 200%;
            background: 
                linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent),
                linear-gradient(-45deg, rgba(14,165,233,0.08), rgba(34,211,238,0.06), transparent);
            animation: shimmer 15s linear infinite;
            z-index: -1;
            pointer-events: none;
        }

        @keyframes bgShift {
            0%, 100% { background-position: 0% 50%, 0% 0%, 0% 100%, 0% 50%; }
            33% { background-position: 100% 50%, 100% 100%, 50% 50%, 100% 100%; }
            66% { background-position: 0% 100%, 0% 50%, 100% 0%, 0% 100%; }
        }

        @keyframes radialFloat {
            0%, 100% { transform: scale(1) translate(0, 0); }
            33% { transform: scale(1.05) translate(10px, -15px); }
            66% { transform: scale(1.02) translate(-5px, 10px); }
        }

        @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(-100%) rotate(0deg); }
            100% { transform: translateX(0%) translateY(0%) rotate(360deg); }
        }

        /* Harmonized body */
        body {
            background: linear-gradient(135deg, #0c0a1a 0%, #1a1a2e 50%, #16213e 100%);
            position: relative;
            overflow-x: hidden;
        }
    `;
    if (!document.getElementById('alive-backgrounds')) {
        document.head.appendChild(style);
    }
}

// Harmonize & prettify all sections with neon glows
function createHarmonizedGlows() {
    const style = document.createElement('style');
    style.id = 'harmonized-glows';
    style.textContent = `
        /* Hero & Sections */
        .hero, section {
            background: rgba(17, 24, 39, 0.4);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(14,165,233,0.05), rgba(34,211,238,0.03));
            animation: heroGlow 8s ease-in-out infinite alternate;
            z-index: -1;
        }

        /* Cards & Buttons */
        [class*="group"], .group, input, textarea, button {
            box-shadow: 
                0 10px 25px rgba(0, 0, 0, 0.3),
                0 0 20px rgba(14, 165, 233, 0.15);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        [class*="group"]:hover, button:hover, input:focus, textarea:focus {
            box-shadow: 
                0 20px 40px rgba(0, 0, 0, 0.5),
                0 0 40px rgba(14, 165, 233, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transform: translateY(-4px);
            border-color: rgba(14, 165, 233, 0.5);
        }

        /* Text glows */
        h1, h2, h3 {
            text-shadow: 
                0 0 20px rgba(14, 165, 233, 0.5),
                0 0 40px rgba(34, 211, 238, 0.3);
            animation: textGlow 3s ease-in-out infinite alternate;
        }

        @keyframes heroGlow {
            0% { opacity: 0.8; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.02); }
        }

        @keyframes textGlow {
            0% { filter: drop-shadow(0 0 10px rgba(14,165,233,0.3)); }
            100% { filter: drop-shadow(0 0 25px rgba(14,165,233,0.6)); }
        }

        /* Responsive */
        @media (max-width: 768px) {
            body::before, body::after { animation-duration: 25s, 20s; }
        }
    `;
    if (!document.getElementById('harmonized-glows')) {
        document.head.appendChild(style);
    }
}

// EmailJS
(function(){
    emailjs.init("pcWdyondr8G6jVez-");
})();

document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        from_name: document.getElementById('user_name').value,
        from_email: document.getElementById('user_email').value,
        message: document.getElementById('message').value
    };
    emailjs.send('service_8t129l2', 'template_i4o3h9n', formData)
        .then(function() {
            alert('Message sent to raviazen@gmail.com!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Setup EmailJS at emailjs.com first.');
        });
});

// Loader styles
const loaderStyle = document.createElement('style');
loaderStyle.id = 'loader-styles';
loaderStyle.textContent = `
    #loader { transition: opacity 0.6s ease-in-out; opacity: 1; }
    main { opacity: 0; transition: opacity 0.8s ease 1s; }
    body.overflow-hidden #loader ~ main { opacity: 0; }
    body:not(.overflow-hidden) main { opacity: 1; }
    
    #mobile-menu { animation: slideDown 0.3s ease-out forwards; transform-origin: top; }
    #mobile-menu.hidden { animation: slideUp 0.3s ease-in forwards; }
    
    @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes slideUp { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-10px); } }
`;
if (!document.getElementById('loader-styles')) {
    document.head.appendChild(loaderStyle);
}

