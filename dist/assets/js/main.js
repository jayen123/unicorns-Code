
// course testimonial
$('.owl-carousel.course_testimonial').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:['<span class="iconify" data-icon="bi:arrow-left"></span>','<span class="iconify" data-icon="bi:arrow-right"></span>'],
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
