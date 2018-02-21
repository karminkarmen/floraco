$(".mcBurger").click(function() {
    $(".topsandwich").toggleClass('topsandwichstart');
    $(".meat").toggleClass("hidden");
    $(".downsandwich").toggleClass("downsandwichstart");
});


var menu = document.querySelector('.menu'),
    menuTrigger = document.querySelector('.mcBurger'),
    mobile = window.matchMedia('(max-width: 800px)');

function mobileMatches(mobile) {
    if (mobile.matches) {
        onMobile();
    } else {
        onDesktop();
    }
}
mobileMatches(mobile);
mobile.addListener( mobileMatches );

menuTrigger.addEventListener( 'click', function(){
    menu.hidden = !menu.hidden;
});

function onMobile(){
    menu.hidden = true;
    menuTrigger.hidden = false;
}

function onDesktop(){
    menu.hidden = false;
    menuTrigger.hidden = true;
}




$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function() {
                    // Callback after animation
                    // Must change focus!
                    // var $target = $(target);
                    // $target.focus();
                    // if ($target.is(":focus")) { // Checking if the target was focused
                    //     return false;
                    // } else {
                    //     $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    //     $target.focus(); // Set focus again
                    // };
                });
            }
        }
    });

AOS.init({
    duration: 1200
});
