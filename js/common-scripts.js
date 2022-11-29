
(function($){
	$(function(){

setTimeout(function(){
    $('map').imageMapResize();
        
    
    if($(window).width() > 1024){
        
        $('.image-map area').on('mouseenter touchstart', function (e) {
            e.preventDefault();
            if($('.popup-item:visible').length){
                $('.popup-item').hide()
                var activeTab = $(this).attr('href');
                $(activeTab).fadeIn(400);
                return false;
                console.log('red')
            }else{
                var activeTab = $(this).attr('href');
                $(activeTab).fadeIn(400);
                return false;
            }
        });
    }
      
    if($(window).width() < 1025){
        
        $('.image-map area').on('click', function (e) {
            e.preventDefault();
            if($('.popup-item:visible').length){
                $('.popup-item').hide()
                var activeTab = $(this).attr('href');
                $(activeTab).fadeIn(400);
                return false;
                console.log('red')
            }else{
                var activeTab = $(this).attr('href');
                $(activeTab).fadeIn(400);
                return false;
            }
        });
    }
        
    $('.cross-btn').click(function(){
        $(this).parent('.popup-item').hide(200);
    })

}, 13000)
        
        var WindowHeight = $(window).outerHeight(),
            WindowHeight2q = WindowHeight / 2,
            WindowHeight4q =  WindowHeight / 1.75;
            
            if($(window).width() > 1024){
              var WindowHeight3q = WindowHeight2q / 1.4;
            }
        
            if($(window).width() < 1025){
              var WindowHeight3q = WindowHeight2q / 1.1;
            }
            if($(window).width() < 767){
              var WindowHeight4q =  WindowHeight /  1.8;
            }
            
            if($(window).width() < 481){
                var  WindowHeight2q = WindowHeight / 1.2,
                     WindowHeight3q = WindowHeight2q / 1.08,
                     WindowHeight4q =  WindowHeight /  1.12;
            }
            
        

        console.log(WindowHeight)
        console.log(WindowHeight2q)
        console.log(WindowHeight3q)
        console.log(WindowHeight4q)

        setTimeout(function () {
            $('div.text-heading').animate({
                'top': WindowHeight2q,
                'opacity': 1
            }, 2000)
            $('div.text-heading').addClass('heading-animate-first')
            setTimeout(function () {
                $('div.text-heading').addClass('heading-animate-second')
                $('div.text-heading').animate({
                    'top': WindowHeight3q
                }, 1500)
            }, 3000)
            setTimeout(function () {
                $('div.text-para').animate({
                    'top': WindowHeight4q,
                    'opacity': 1

                }, 2000)
                $('div.text-para').addClass('para-animate')
            }, 4500)
        }, 8000)
        
		
	})// End ready function.
})(jQuery)

