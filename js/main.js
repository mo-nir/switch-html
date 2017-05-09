(function($){
'use strict';
    
    
    // imagesLoaded
    $('#container').imagesLoaded( function() {
        
        $('.our-lt-wrk-filter-butn-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
            }
        })
    
    
    
    });
    
    
    
})(jQuery); // End of use strict