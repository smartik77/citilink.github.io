
// Слайдер для .add1
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.add1 .slide');
    let currentSlide = 0;
    const intervalTime = 2500; // 2.5 секунды

    function nextSlide() {
        // Убираем активный класс с текущего слайда
        slides[currentSlide].classList.remove('active');
        // Переходим к следующему слайду (с возвратом к началу)
        currentSlide = (currentSlide + 1) % slides.length;
        // Добавляем активный класс новому слайду
        slides[currentSlide].classList.add('active');
    }

    // Запускаем автоматическую смену слайдов
    let sliderInterval = setInterval(nextSlide, intervalTime);

    // Остановка слайдера при наведении
    const slider = document.querySelector('.add1');
    slider.addEventListener('mouseenter', () => {
        clearInterval(sliderInterval);
    });
    slider.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(nextSlide, intervalTime);
    });
});

// Мобильное меню
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-items').classList.toggle('active');
});

// Админ панель
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginBtn');
    const adminPanel = document.getElementById('adminPanel');
    const logoutButton = document.getElementById('logoutBtn');
    let isLoggedIn = false;

    // Обработчик входа
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!isLoggedIn) {
            // Имитация авторизации
            isLoggedIn = true;
            loginButton.querySelector('span').textContent = 'Профиль';
            adminPanel.style.display = 'block';
        } else {
            // Переключение видимости панели
            adminPanel.style.display = 
                adminPanel.style.display === 'none' ? 'block' : 'none';
        }
    });

    // Обработчик выхода
    logoutButton.addEventListener('click', () => {
        isLoggedIn = false;
        loginButton.querySelector('span').textContent = 'Войти';
        adminPanel.style.display = 'none';
    });

    // Закрытие при клике вне панели
    document.addEventListener('click', (e) => {
        if (!adminPanel.contains(e.target) && 
            !loginButton.contains(e.target)) {
            adminPanel.style.display = 'none';
        }
    });
});