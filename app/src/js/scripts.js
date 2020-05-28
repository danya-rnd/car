$(document).ready(function() {
    setTimeout(function() {
        $('.calculator').css({
            'transform': 'translateX(0%)',
            'transition': '.5s'
        });
    }, 2000)

    var reviewsSlider = new Swiper('.reviews__slider', {
        slidesPerView: 5,
        spaceBetween: 48,
        allowTouchMove: false,
        loop: true,
        navigation: {
            nextEl: '.reviews__next',
            prevEl: '.reviews__prev'
        },
        breakpoints: {
            1350: {
                slidesPerView: 4
            },
            1142: {
                slidesPerView: 3
            },
            892: {
                slidesPerView: 2,
                allowTouchMove: true
            },
            618: {
                slidesPerView: 1,
                allowTouchMove: true
            }
        }
    });

    var auctionsSlider = new Swiper('.auctions__slider', {
        slidesPerView: 4,
        spaceBetween: 35,
        allowTouchMove: false,
        loop: true,
        navigation: {
            nextEl: '.auctions__next',
            prevEl: '.auctions__prev'
        },
        breakpoints: {
            1380: {
                slidesPerView: 3
            },
            1142: {
                slidesPerView: 2
            },
            892: {
                slidesPerView: 2,
                allowTouchMove: true
            },
            618: {
                slidesPerView: 1,
                allowTouchMove: true
            }
        }
    });

    $('.inventory__tab').on('click', function(e) {
        $('.inventory__tab').removeClass('active');
        $(e.target).addClass('active');
    })

    $('.filters__title').on('click', function(e) {
        var arrow = $(this).find('.filters__open');

        $(arrow).toggleClass('active')

        var parent = $(this).parent();
        var target = parent.find('.filters__hidden');

        $(target).slideToggle(200);
    });

    var galleryThumbs = new Swiper('.item__gallery__thumbs', {
        spaceBetween: 15,
        slidesPerView: 3,
        slidesPerColumn: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        allowTouchMove: false,
        breakPoints: {
            1060: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                allowTouchMove: true
            }
        }
    });

    var galleryTop = new Swiper('.item__gallery__main', {
        spaceBetween: 10,
        allowTouchMove: false,
        navigation: {
            nextEl: '.item__nav__next',
            prevEl: '.item__nav__prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
        breakPoints: {
            1024: {
                allowTouchMove: true
            }
        }
    });

    var galleryModal = new Swiper('.modal__gallery__slider', {
        spaceBetween: 10,
        autoHeight: true,
        allowTouchMove: false,
        navigation: {
            nextEl: '.modal__gallery__next',
            prevEl: '.modal__gallery__prev',
        },
    });

    galleryTop.on('click', function() {
        if (galleryTop.clickedSlide) {
            var index = galleryTop.activeIndex;

            $('#gallery').fadeIn(200);

            galleryModal.slideTo(index, 0, false);
            galleryModal.update();

            document.addEventListener('click', eventHandler);
        }
    });


    $(document).on('click', function(e) {
        var desc = $('.header__middle__logo img');

        if (desc.is(e.target)) {
            $('.header__middle__desc').fadeIn(200);
        } 
        else if (!desc.is(e.target) && desc.has(e.target).length === 0) {
            $('.header__middle__desc').fadeOut(200);
        }
    });

    $('.header__bottom__button').on('click', function() {
        $('body').css({
            'overflow': 'hidden',
            'padding-right': getScrollbarWidth()
        });

        $('#register').fadeIn(200);

        setTimeout(function() {
            document.addEventListener('click', eventHandler);
        }, 500);
    });

    $('.register__form').on('submit', function(e) {
        e.preventDefault();

        var inputs = $(this).find('input');

        var modalInputs = $('#register').find('.modal__form__list').find('input');

        for (var i = 0; i < inputs.length; i++) {
            if (i < 2) {
                modalInputs[i].value = inputs[i].value;
            } else {
                modalInputs[17].value = inputs[i].value;
            }
        }

        $('body').css({
            'overflow': 'hidden',
            'padding-right': getScrollbarWidth()
        });

        $('#register').fadeIn(200);

        this.reset();

        setTimeout(function() {
            document.addEventListener('click', eventHandler);
        }, 500);

    });

    $('.search-block__search').on('click', function() {
        if ($('.helping') && !$('.helping').hasClass('active')) {
            $('.helping').slideToggle(200);
            $('.helping').addClass('active');
        }
    });

    $('.modal__calculate__tab').on('click', function() {
        var index = $(this).index();

        $('.modal__calculate__tab').removeClass('active');
        $(this).addClass('active');

        $('.modal__form__tab').removeClass('active');
        $('.modal__form__tab').eq(index).addClass('active');
    });

    $('.calculator').on('click', function() {
        $('#calculate').fadeIn(200);
        setTimeout(function() {
            document.addEventListener('click', eventHandler);
        }, 500);
    });

    $('.numbers__num').each(function(index) {
        var elem = $('.numbers__num').eq(index).html();

        var newElem = elem.split(' ');

        var str = '';

        newElem.forEach(function(int) {
            str += int
        });

        $('.numbers__num').eq(index).animate({ num: str }, {
            duration: 2000,
            step: function(num) {
                this.innerHTML = num.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }
        });
    });

    $('.header__burger').on('click', function() {
        $('.header__top').css({
            'transform': 'translateX(0)'
        });
    });

    $('.header__close').on('click', function() {
        $('.header__top').css({
            'transform': 'translateX(-100%)'
        });
    });

    $('.filters__mobile').on('click', function() {
        $('.filters').fadeIn(200);
    });

    $('.filters__close').on('click', function() {
        $('.filters').fadeOut(200);
    });

    function getScrollbarWidth() {
        return window.innerWidth - document.documentElement.clientWidth;
    }

    function eventHandler(e, object) {
        var modal = $('.modal__wrap');

        if (!modal.is(e.target) && modal.has(e.target).length === 0) {
            $('.modal').fadeOut(200);
            
            $('body').css({
                'overflow': 'auto',
                'padding-right': 0
            });

            $('#register').find('form')[0].reset();
            $('#calculate').find('form')[0].reset();

            document.removeEventListener('click', eventHandler, false);
        }
    }
});

// $(window).scroll(function(e) {
//     var scrollPos = window.scrollY;

//     if (scrollPos > 0) {
//         $('.header').addClass('fixed');

//     }
// });