);
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

// Modal Dışına Tıklama ile Kapatma
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modal.querySelector('.modal-content').classList.remove('active');
        }
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
