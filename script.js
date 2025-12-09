document.addEventListener('DOMContentLoaded', function() {
    // انتخاب دکمه و منو بر اساس کلاس و ID که در HTML تعریف کردیم
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#main-nav-menu'); 

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            // نمایش/مخفی کردن منو
            navMenu.classList.toggle('active');
            // تغییر آیکون همبرگر به ضربدر (X)
            menuToggle.classList.toggle('is-open'); 
        });
    }
});
