
// слайдер для .add1
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