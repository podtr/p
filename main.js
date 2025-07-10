// Hamburger Menü
document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('hidden');
});

// Modal Aç/Kapat
function openModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add('active');
    modal.querySelector('.modal-content').classList.add('active');
}
function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('active');
    modal.querySelector('.modal-content').classList.remove('active');
}

// Galeri Filtreleme
document.querySelectorAll('.gallery-filter').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        document.querySelectorAll('.gallery-filter').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');

        document.querySelectorAll('.gallery-item').forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                item.classList.add('animate__animated', 'animate__fadeIn');
            } else {
                item.style.display = 'none';
                item.classList.remove('animate__animated', 'animate__fadeIn');
            }
        });
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Dışına Tıklama ile Kapatma
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modal.querySelector('.modal-content').classList.remove('active');
        }
    });
});
