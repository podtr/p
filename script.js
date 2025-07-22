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
    'web-design': {
        title: 'Web Tasarım Hizmetleri',
        content: `
            <h3>Professional Web Tasarım</h3>
            <p>Modern, responsive ve kullanıcı dostu web siteleri tasarlıyorum. Her projeye özel yaklaşım ile markanızı dijital dünyada en iyi şekilde temsil edecek çözümler üretiyorum.</p>
            <h4>Hizmet Detayları:</h4>
            <ul>
                <li>Responsive tasarım (mobil uyumlu)</li>
                <li>Modern ve kullanıcı dostu arayüz</li>
                <li>SEO optimizasyonu</li>
                <li>Hızlı yükleme süreleri</li>
                <li>Cross-browser uyumluluğu</li>
            </ul>
            <p><strong>Süre:</strong> 2-4 hafta<br><strong>Fiyat:</strong> Projeye göre değişkenlik gösterir</p>
        `
    },
    'mobile-app': {
        title: 'Mobil Uygulama Geliştirme',
        content: `
            <h3>iOS ve Android Uygulamaları</h3>
            <p>Hem iOS hem de Android platformları için native ve cross-platform mobil uygulamalar geliştiriyorum. Kullanıcı deneyimini ön planda tutarak performanslı uygulamalar üretiyorum.</p>
            <h4>Uygulama Türleri:</h4>
            <ul>
                <li>E-ticaret uygulamaları</li>
                <li>Sosyal medya uygulamaları</li>
                <li>Kurumsal uygulamalar</li>
                <li>Oyun uygulamaları</li>
                <li>Utility uygulamalar</li>
            </ul>
            <p><strong>Süre:</strong> 6-12 hafta<br><strong>Platform:</strong> iOS & Android</p>
        `
    },
    'graphic-design': {
        title: 'Grafik Tasarım Hizmetleri',
        content: `
            <h3>Yaratıcı Grafik Tasarımları</h3>
            <p>Markanızın kimliğini yansıtan özgün ve etkileyici grafik tasarımlar yapıyorum. Logo tasarımından kurumsal kimlik çalışmalarına kadar geniş bir yelpazede hizmet veriyorum.</p>
            <h4>Tasarım Alanları:</h4>
            <ul>
                <li>Logo ve marka kimlik tasarımı</li>
                <li>Katalog ve broşür tasarımı</li>
                <li>Social media görselleri</li>
                <li>Web banner tasarımları</li>
                <li>Ambalaj tasarımı</li>
            </ul>
            <p><strong>Süre:</strong> 1-3 hafta<br><strong>Revizyon:</strong> 3 ücretsiz revizyon hakkı</p>
        `
    },
    'seo': {
        title: 'SEO Optimizasyon',
        content: `
            <h3>Arama Motoru Optimizasyonu</h3>
            <p>Web sitenizin arama motorlarında üst sıralarda yer alması için teknik ve içerik optimizasyonu yapıyorum. Organik trafiğinizi artırarak potansiyel müşterilere ulaşmanızı sağlıyorum.</p>
            <h4>SEO Hizmetleri:</h4>
            <ul>
                <li>Anahtar kelime analizi ve stratejisi</li>
                <li>On-page optimizasyon</li>
                <li>Teknik SEO analizi</li>
                <li>İçerik optimizasyonu</li>
                <li>Backlink stratejileri</li>
            </ul>
            <p><strong>Süre:</strong> 3-6 ay<br><strong>Rapor:</strong> Aylık detaylı analiz raporu</p>
        `
    },
    'ecommerce': {
        title: 'E-ticaret Çözümleri',
        content: `
            <h3>Online Mağaza Sistemleri</h3>
            <p>Güvenli, kullanıcı dostu ve satış odaklı e-ticaret siteleri geliştiriyorum. Ödeme sistemlerinden stok takibine kadar tüm süreçleri yönetebileceğiniz kapsamlı çözümler sunuyorum.</p>
            <h4>E-ticaret Özellikleri:</h4>
            <ul>
                <li>Güvenli ödeme sistemleri</li>
                <li>Stok ve sipariş yönetimi</li>
                <li>Kullanıcı hesap sistemi</li>
                <li>Mobil uyumlu tasarım</li>
                <li>SEO optimizasyonu</li>
            </ul>
            <p><strong>Süre:</strong> 4-8 hafta<br><strong>Destek:</strong> 1 yıl teknik destek</p>
        `
    },
    'consultation': {
        title: 'Dijital Danışmanlık',
        content: `
            <h3>Dijital Strateji ve Danışmanlık</h3>
            <p>Dijital dünyadaki varlığınızı güçlendirmek için stratejik danışmanlık hizmeti veriyorum. Mevcut durumunuzu analiz ederek en uygun dijital çözümleri öneriyorum.</p>
            <h4>Danışmanlık Alanları:</h4>
            <ul>
                <li>Dijital strateji geliştirme</li>
                <li>Web sitesi analizi ve önerileri</li>
                <li>Sosyal medya stratejisi</li>
                <li>Pazarlama otomasyonu</li>
                <li>Teknoloji seçimi danışmanlığı</li>
            </ul>
            <p><strong>Format:</strong> Online/Yüz yüze görüşme<br><strong>Süre:</strong> İhtiyaca göre değişkenlik gösterir</p>
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
