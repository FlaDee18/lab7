const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const toTop = document.getElementById('toTop');

// Мобильное меню
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Кнопка "Наверх"
window.addEventListener('scroll', () => {
    toTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

toTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
