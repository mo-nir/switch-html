(function($){
'use strict';
    
    
        // Isotop Code for button
        $('.our-lt-wrk-filter-butn-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        

    // Isotop Activation after Imagesload
    var $grid = $('.grid').imagesLoaded(function () {
        // init Isotope after all images have loaded
        $grid.isotope({
            // options...
            itemSelector: '.grid-item', 
            percentPosition: true, 
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });
    });
        
        
        
    //Owl Carousel Activation for Testimonial Are
    var owl_testimonial = $('.testimonial-carousel.owl-carousel');
    owl_testimonial.owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:1800,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });
    
        // Stop Carousel On MouseEnter
        $(".testimonial-carousel-item").mouseenter(function(){
            owl_testimonial.trigger('stop.owl.autoplay')
        });

        // Start Carousel On MouseLeave
        $(".testimonial-carousel-item").mouseleave(function(){
            owl_testimonial.trigger('play.owl.autoplay')
        });    
    
    
    //Owl Carousel Activation for Testimonial Are
    var owl_hpy = $('.our-hpy-clnt-carousel.owl-carousel');
    owl_hpy.owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        autoplayTimeout:1500,
    });
    
        // Stop Carousel On MouseEnter
        $(".our-hpy-clnt-carousel-item").mouseenter(function(){
            owl_hpy.trigger('stop.owl.autoplay')
        });

        // Start Carousel On MouseLeave
        $(".our-hpy-clnt-carousel-item").mouseleave(function(){
            owl_hpy.trigger('play.owl.autoplay')
        });
    
    
    
    
})(jQuery); // End of use strict