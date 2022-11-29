(function ($) {
    $(function () {

        var counters = document.querySelectorAll('.counter');

        counters.forEach(counter => {
            const updateCount = () => {
                var target = +counter.getAttribute('data-purecounter-end');
                var count = +counter.innerText;
                var speed = 3000;

                var inc = target / speed;

                if(count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            }

            updateCount();
        })

        // var $animation_elements = $('.anim-el');
        // var $window = $(window);

        // function check_if_in_view() {
        //     var window_height = $window.height();
        //     var insetAmount = window_height / 20 // fifth of the screen
        //     var window_top_position = $window.scrollTop();
        //     var window_bottom_position = (window_top_position + window_height) - insetAmount;

        //     $.each(counters, function () {
        //         var $element = $(this);
        //         var element_height = $element.outerHeight();
        //         var element_top_position = $element.offset().top + 100;
        //         var element_bottom_position = (element_top_position + element_height);

                
        //             counters.forEach(counter => {
        //                 const updateCount = () => {
        //                     var target = +counter.getAttribute('data-target');
        //                     var count = +counter.innerText;
        //                     var speed = 500;

        //                     var inc = target / speed;

        //                     //check to see if this current container is within viewport
        //                     if (element_top_position <= window_bottom_position) {

        //                     if(count < target) {
        //                         counter.innerText = Math.ceil(count + inc);
        //                         setTimeout(updateCount, 1);
        //                     } else {
        //                         counter.innerText = target;
        //                     }
        //                     }
        //                 }

        //                 updateCount();
        //             })
                
        //     });
        // }
        // $window.on('scroll orientationchange resize', check_if_in_view);
        // $window.trigger('scroll');


        $('#copyLink').click(function (e) {
          e.preventDefault();
           var copyText = $(this).attr('href');
           alert("Page link copied");

           document.addEventListener('copy', function(e) {
              e.clipboardData.setData('text/plain', copyText);
              e.preventDefault();
           }, true);

           document.execCommand('copy');  
        })

        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
        });
        var header = new Headroom(document.querySelector(".main-header-section"), {
            tolerance: 5,
            offset: 100,
            classes: {
                initial: "headroom",
                pinned: "slideDown",
                unpinned: "slideUp"
            }
        });
        header.init();

        $('.video-play-icon').fancybox({
            btnTpl : {
                close:
                  '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
                  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25"><path fill="#020038" d="M18.707 7.207c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L12 11.086 6.707 5.793c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414l5.293 5.293-5.293 5.293c-.39.39-.39 1.024 0 1.414.39.39 1.024.39 1.414 0L12 13.914l5.293 5.293c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L13.414 12.5l5.293-5.293z"/></svg>' +
                  "</button>",
              }
        });

        if ($('.testimonial-quotation-slider-warp').length) {
            $('.testimonial-quotation-slider-warp').slick({
                dots: false,
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 7000,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.testimonial-nav-slider-items'
            });
        }

        if ($('.testimonial-nav-slider-items').length) {
            $('.testimonial-nav-slider-items').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.testimonial-quotation-slider-warp',
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                centerMode: true,
                useCSS: true,
                arrows: false,
            });
        }

        if($(window).width() < 767) {

            if ($('.perseverance-pays-tab-wrap .timelineSlider').length) {
                $('.perseverance-pays-tab-wrap .timelineSlider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.perseverance-pays-tab-wrap .perseverance-pays-tab-trigger > ul',
                    dots: false,
                    arrows: false,
                });
            }

            if ($('.perseverance-pays-tab-wrap .perseverance-pays-tab-trigger > ul').length) {
                $('.perseverance-pays-tab-wrap .perseverance-pays-tab-trigger > ul').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    asNavFor: '.perseverance-pays-tab-wrap .timelineSlider',
                    dots: true,
                    centerMode: false,
                    arrows: true,
                });
            }

            // if ($('.tab-dot-wrap').length) {
            //     $('.tab-dot-wrap').slick({
            //         slidesToShow: 6,
            //         slidesToScroll:1,
            //         asNavFor: '.perseverance-tab-wrap-inner, .perseverance-pays-tab-trigger ul',
            //         dots: false,
            //         centerMode: false,
            //         arrows: false,
            //         variableWidth: false,
            //         focusOnSelect: true,
            //         infinite : true
            //     });
            // }

            $('.perseverance-pays-tab-trigger ul li a, .perseverance-pays-tab-trigger ul li button').click(function () {
                $('html, body').animate({
                        scrollTop: $(".perseverance-pays-tab-wrap").offset().top - 50
                    }, 800);
            })

        }

        /* Our People */
        if ($('.our-people-testimonial-slider-wrap').length) {
            $('.our-people-testimonial-slider-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                arrows: false,
                fade: true,
            });
        }

        if ($('.perseverance-pays-tab-trigger').length) {
            if($(window).width() < 991){
                var stickyElm = document.querySelector('.perseverance-pays-tab-trigger')

                var observer = new IntersectionObserver( 
                  ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
                  {threshold: [1]}
                );

                observer.observe(stickyElm);
            }
        }

        if($(window).width() > 768) {
                

            $('.perseverance-pays-tab-trigger ul li:first-child').addClass('tab-active');
            $('.perseverance-pays-tab-item:first').show();
            // Click function
            $('.perseverance-pays-tab-trigger ul li a').click(function () {
                
                $('html, body').animate({
                    scrollTop: $(".perseverance-pays-tab-wrap").offset().top - 40
                }, 800);
                $('.perseverance-pays-tab-trigger ul li').removeClass('tab-active');
                $(this).parent('li').addClass('tab-active');
                $('.perseverance-pays-tab-item').hide();

                var activeTab = $(this).attr('href');
                $(activeTab).show();
                return false;
            });

        }
        // Click function
        $('.leadership-team-item').click(function () {
            $("body").addClass('modalOpen');
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        $('.leadership-modal-cross').click(function () {
            $(".leadership-modal-content").scrollTop(0);
            $('.leadership-modal').hide();
            $(".modal-gradient").fadeOut();
            $("body").removeClass('modalOpen')


        });
        if ($('.our-people-content').length) {
            $('body').addClass('our-people-page')
        }

        $('.leadership-modal-content').scroll(function() {
            if ($(this).scrollTop() > 0){
                $(".modal-gradient").fadeIn()
                }
            else{
                $(".modal-gradient").fadeOut()
                
            }
        })

        //Our Srories
        

        if ($('.story-area').length) {
            $('.our-stories-tab-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: 'unslick',
                },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            $(window).on('resize', function () {
                $('.our-stories-tab-item-wrap').slick('resize');
            });
        }

        //Contact
        $('.contact-tab-triger ul li').eq(4).addClass('contact-tab-active');
        $('.contact-tab-item').eq(4).show();
        // Click function
        $('.contact-tab-triger ul li a').click(function () {
            $('.contact-tab-triger ul li').removeClass('contact-tab-active');
            $(this).parent('li').addClass('contact-tab-active');
            $('.contact-tab-item').hide();
            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
        });


        if ($('.media-info-item').length) {
            $('.media-info-item').slick({
                dots: false,
                arrows: true,
                speed: 1000,
                infinite: true,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,

                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,

                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.media-info-item').slick('resize');

            });
        }

        if ($(".the-media").length) {
            $("body").addClass('the-media-page');
            $("#menu-header-menu li:nth-child(4)").addClass('active');
        }

        if ($(".single-press_release ").length) {
            $("#menu-header-menu li:nth-child(4)").addClass('active');
        }

        if ($(".privacy-page").length) {
            $("body").addClass('privacy');
        }

        if ($(".perseverance-pays-wrap").length) {
            $("body").addClass('stickyBar');
        }

        
        $('.photo-modal').click(function () {
            $("body").addClass('modalOpen');
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
            
        });

        

        $('.photos-cross').click(function () {
            $(".modal-wrap").scrollTop(0);
            $('.photos-modal').hide();
            $("body").removeClass('modalOpen')

        });

        $('.modal-wrap').scroll(function() {
            if ($(this).scrollTop() > 0){
                $(".modal-gradient").fadeIn()
                }
            else{
                $(".modal-gradient").fadeOut()
                
            }
        })

        var scrollInOut = $(window).scrollTop(); 
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if(scroll > scrollInOut) {
                
                $('body').removeClass('tabsticky');
            } else {
                $('body').addClass('tabsticky');
            }
            scrollInOut = scroll;
        });

            
        

        $('.globally-map-inner map area').mouseenter(function () {
             
            $('.hovered-thumb').removeClass('hoverShow');

            var activeTab = $(this).attr('href');
            $(activeTab).addClass('hoverShow')
            return false;
        });
        
        $('.globally-map-inner map area').mouseleave(function () {
             
            $('.hovered-thumb').removeClass('hoverShow');

        });
        if ($('.blog-content').length) {
            $('body').addClass('blog-page');
        }
        


   //Blog page//
   if ($('.featured-blog-item-wrap').length) {
    $('.featured-blog-item-wrap').slick({
        dots: false,
        arrows: true,
        speed: 1000,
        infinite: false,
        navigation: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
    });
    $(window).on('resize', function () {
        $('.featured-blog-item-wrap').slick('resize');

    });
}


// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



// $('.category-tab-triger ul li').click(function(){
//     $('.category-tab-triger ul li').removeClass('category-active');
//     $(this).addClass('category-active');
//     $('.category-tab .category-tab-inner').hide();

//     var activeTab = $(this).find('a').attr('href');
//     $(activeTab).fadeIn();
//     return false;
// });


    }) // End ready function.

        $(window).on('load resize',function(){
            if($('.object-fit-lazyload').length > 0){
                $('.object-fit-lazyload').each(function(){
                    var height = $(this).parents('.hero-wrap').outerHeight(),
                    dAspectRatio = $(this).data('daspectratio'),
                    mAspectRatio = $(this).data('maspectratio');
                    if($(window).width() > 767) {
                        var setWidth = dAspectRatio * height;
                        $(this).attr('sizes',setWidth);
                        $(this).parent().find('.dsource').attr('sizes',setWidth);
                    } else {
                        var setWidth = mAspectRatio * height;
                        $(this).attr('sizes',setWidth);
                        $(this).parent().find('.msource').attr('sizes',setWidth);
                    }
                })
            }
        });


})(jQuery)