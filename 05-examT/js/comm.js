var swiper = new Swiper('.slide-intro', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

var swiper = new Swiper('.slide-about', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
