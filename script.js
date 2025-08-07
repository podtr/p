// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const slides = document.querySelectorAll('.slide');
const serviceCards = document.querySelectorAll('.service-card');
const modal = document.getElementById('serviceModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close');

// Service Data
const serviceData = {
    'mantar-tedavisi': {
        title: 'Mantar Tedavisi',
        content: `
            <h3>Ayak Mantarı Nedir?</h3>
            <p>Ayak mantarı, genellikle nemli ortamlarda çoğalan mantarların neden olduğu, kaşıntı, kızarıklık, kötü koku ve deri döküntüsüyle kendini gösteren bulaşıcı bir cilt enfeksiyonudur.</p>
            <h4>Podolog Ne Yapar?</h4>
            <ul>
                <li>Etkilenen bölgeyi steril şekilde temizler</li>
                <li>Uygun antifungal bakım ürünleri önerir</li>
                <li>Ayak hijyeni ve koruyucu önlemler hakkında danışmanlık verir</li>
            </ul>
            <p><strong>Not:</strong> Erken müdahale, tedavi sürecini hızlandırır.</p>
        `
    },
    'batik-tedavisi': {
        title: 'Batık Tırnak Tedavisi',
        content: `
            <h3>Batık Tırnak Sorunu</h3>
            <p>Tırnağın kenarlarının cilde gömülmesiyle oluşan bu durum, ağrıya, şişmeye ve bazen enfeksiyona neden olur. Dar ayakkabılar veya yanlış tırnak kesimi başlıca nedenlerindendir.</p>
            <h4>Podolog Ne Yapar?</h4>
            <ul>
                <li>Batık tırnağı cerrahi olmayan yöntemlerle düzeltir</li>
                <li>Özel tel sistemi veya destek aparatları uygular</li>
                <li>Enfeksiyon varsa bakım yapar ve yönlendirir</li>
            </ul>
            <p><strong>İpucu:</strong> Doğru tırnak kesimi batık oluşumunu engeller.</p>
        `
    },
    'travma-tedavisi': {
        title: 'Travmaya Bağlı Ayak Sorunları',
        content: `
            <h3>Travma Sonrası Ayak Bakımı</h3>
            <p>Darbe, düşme veya uzun süreli basınç sonucu oluşan travmalar; tırnakta renk değişimi, kalınlaşma, morarma ya da deformasyon şeklinde görülebilir.</p>
            <h4>Podolog Ne Yapar?</h4>
            <ul>
                <li>Tırnak ya da ciltte oluşan hasarı değerlendirir</li>
                <li>Koruyucu ve destekleyici bakım uygular</li>
                <li>Gerektiğinde ileri tedavi için yönlendirir</li>
            </ul>
            <p><strong>Öneri:</strong> Travma sonrası erken bakım kalıcı hasarı önler.</p>
        `
    },
    'topuk-catlagi': {
        title: 'Topuk Çatlakları Tedavisi',
        content: `
            <h3>Topuk Çatlakları Neden Olur?</h3>
            <p>Cilt kuruluğu, fazla kilo, uzun süre ayakta kalmak ya da uygun olmayan ayakkabılar çatlaklara yol açabilir. Estetik kaygının ötesinde enfeksiyon riski taşır.</p>
            <h4>Podolog Ne Yapar?</h4>
            <ul>
                <li>Ölü dokuyu özel cihazlarla temizler</li>
                <li>Nemlendirici ve iyileştirici ürünlerle bakım yapar</li>
                <li>Koruyucu ped ve krem önerisinde bulunur</li>
            </ul>
            <p><strong>Not:</strong> Düzenli bakım sağlıklı ve pürüzsüz topuklar için şarttır.</p>
        `
    },
    'nasir': {
        title: 'Nasır Tedavisi',
        content: `
            <h3>Nasır Nedir?</h3>
            <p>Basınca ve sürtünmeye bağlı olarak ciltte oluşan sertleşmiş kalınlaşmalardır. Ağrılı olabilir ve yürüme konforunu bozar.</p>
            <h4>Podolog Ne Yapar?</h4>
            <ul>
                <li>Nasırı ağrısız yöntemlerle temizler</li>
                <li>Basınç dağıtıcı tabanlık ya da silikon destek önerir</li>
                <li>Ayakkabı ve yürüme alışkanlıklarına dair öneriler sunar</li>
            </ul>
            <p><strong>Uyarı:</strong> Kendi kendine kazımak enfeksiyona yol açabilir.</p>
        `
    },
    'sigil': {
        title: 'Siğil (Verruka) Tedavisi',
        content: `
            <h3>Ayak Siğili Nedir?</h3>
            <p>HPV virüsünün neden olduğu, genellikle ayak tabanında görülen sert, basınca duyarlı ve bazen siyah noktalarla belirgin cilt lezyonlarıdır.</p>
            <h4>Podolog Ne Yapar?</h4>
            <ul>
                <li>Siğili steril ortamda mekanik yöntemlerle temizler</li>
                <li>Uygun lokal ürünlerle destek tedavi uygular</li>
                <li>Hijyen ve bulaş riskine karşı öneriler sunar</li>
            </ul>
            <p><strong>Bilinçli Müdahale:</strong> Siğillerin çoğalmasını önlemek için profesyonel destek şarttır.</p>
        `
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializeAnimations();
    initializeNavigation();
    initializeServices();
    initializeSmoothScrolling();
    initializeHamburgerMenu();
});

// Hamburger Menu
function initializeHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Hero Slider
function initializeSlider() {
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add animation classes and observe elements
    const animateElements = document.querySelectorAll('.section-title, .about-content, .service-card, .contact-content');
    
    animateElements.forEach((element, index) => {
        if (element.classList.contains('section-title')) {
            element.classList.add('fade-in');
        } else if (element.classList.contains('about-content')) {
            element.querySelector('.about-image').classList.add('slide-in-left');
            element.querySelector('.about-text').classList.add('slide-in-right');
            observer.observe(element.querySelector('.about-image'));
            observer.observe(element.querySelector('.about-text'));
        } else if (element.classList.contains('service-card')) {
            element.classList.add('fade-in');
            // Stagger animation
            element.style.transitionDelay = `${index * 0.1}s`;
        } else if (element.classList.contains('contact-content')) {
            element.classList.add('fade-in');
        }
        
        observer.observe(element);
    });
}

// Navigation
function initializeNavigation() {
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Services Modal
function initializeServices() {
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceType = card.getAttribute('data-service');
            const data = serviceData[serviceType];
            
            if (data) {
                modalBody.innerHTML = data.content;
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', closeModalFunction);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModalFunction();
        }
    });
}

function closeModalFunction() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Contact Form
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Simple validation
    if (name && email && message) {
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Gönderiliyor...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Mesajınız başarıyla gönderildi!');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    } else {
        alert('Lütfen tüm alanları doldurunuz.');
    }
});

// CTA Button Click
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add some interactive effects
document.addEventListener('mousemove', (e) => {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    hero.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});

// Service card hover effects
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
