let menuOpen = false;
let swiper1 = new Swiper(".visual_swiper", {

    loop: true,
    grabCursor: false,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },

    slidesPerView: 1,
    spaceBetween: 0,

    pagination: {
        el: ".nav",
        clickable: true,
    },
});

history.scrollRestoration = "manual";

$('.burger').click(() => {
    if (!menuOpen) {
        $('.submenu').css({ top: '0px', opacity: 1 });
        $('.dark').css({ backgroundColor: 'rgba(0, 0, 0, 0.7)' });
        $('.burger img:first-child').css({ opacity: 1 });
        $('.burger img:last-child').css({ opacity: 0 });
        $('body').css({ overflow: 'hidden' });
        $('html').css({ overflow: 'hidden' });
    } else {
        $('.submenu').css({ top: '-900px', opacity: 0 });
        $('.dark').css({ backgroundColor: 'rgba(0, 0, 0, 0)' });
        $('.burger img:first-child').css({ opacity: 0 });
        $('.burger img:last-child').css({ opacity: 1 });
        $('body').css({ overflow: 'auto' });
        $('html').css({ overflow: 'auto' });
    }
    menuOpen = !menuOpen;
})