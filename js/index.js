function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ' .main .swiper-button-next',
            prevEl: ' .main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
        }
    })
}





$(document).ready(function() {


    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header").toggleClass("header--active")
        $(".header__logo").toggleClass("header__logo--active")
        $(".header__right").toggleClass("header__right--active")
        $("body").toggleClass("fixed-body")

    })

    $(".blog__left-tab").click(function() {
        let path = $(this).attr("data-tab-path");
        $(".blog__left-tab").removeClass("blog__left-tab--active");
        $(this).addClass("blog__left-tab--active");
        $(".blog__content").removeClass("blog__content--active");
        $(`.blog__content[data-content-path="${path}"]`).addClass("blog__content--active");
    })

})