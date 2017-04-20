(function($) {
    "use strict";

    /*--------------------------------------------------------------
    ## Scripts initialization
    --------------------------------------------------------------*/

    $(window).load(function() {
        $(window).trigger("scroll");
        $(window).trigger("resize");
        portfolio_ms();

    });


    $(document).ready(function() {
        $(window).trigger("resize");
        preloader();
        portfolio_ms();
        p_owl_carousel();
        p_smooth_scroll();
        form_validator();
        portfolio_load();
        new WOW().init();
        $('#parallax-bg').parallax("50%", 0.2);

    });


    $(window).resize(function() {
        portfolio_ms();
        
    });


    /*--------------------------------------------------------------
    ## Preloader
    --------------------------------------------------------------*/
    function preloader() {

        $(window).on('load', function () {
            $("body").imagesLoaded(function () {
                $(".p-preloader-wave").fadeOut();
                $("#p-preloader").delay(200).fadeOut("slow").remove();
            });
        });

    }


    /*--------------------------------------------------------------
    ## Portfolio
    --------------------------------------------------------------*/
    function portfolio_ms() {

        $('.portfolio').isotope({
          itemSelector: '.portfolio-item',
          transitionDuration: '0.60s',
          masonry: {
            percentPosition: true
          }
        });

        /* Active Class of Portfolio*/
        $('.portfolio-filter ul li').click(function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        /*=== Portfolio filtering ===*/
        $('.portfolio-filter ul').on('click', 'a', function() {
            var filterElement = $(this).attr('data-filter');
            $(this).parents(".portfolio-filter").next().isotope({
                filter: filterElement
            });
        });

    }


    /*--------------------------------------------------------------
    ## Owl Carousel
    --------------------------------------------------------------*/
    function p_owl_carousel() {

        $("#blog-slider").owlCarousel({
          singleItem : true,
          pagination : false,
          navigation : true,
          navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          transitionStyle : "fade",
          autoPlay : true
        });

    }


    /*--------------------------------------------------------------
    ## Smooth Scroll
    --------------------------------------------------------------*/
    function p_smooth_scroll() {

        if (typeof smoothScroll == 'object') {
            smoothScroll.init();
        }

    }


    /*--------------------------------------------------------------
    ## Form Validator
    --------------------------------------------------------------*/
    function validateEmail(email) {

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);

    }

    function form_validator() {

      $('#contact').submit(function (event) {
      event.preventDefault();
   
      var formData = {
       'name': $('#contact [name=name]').val(),
       'email': $('#contact [name=email]').val(),
       'phone': $('#contact [name=phone]').val(),
       'website': $('#contact [name=website]').val(),
       'message': $('#contact [name=message]').val(),
     };
   
     var valid = true;
     if (!formData.name) {
      $('#contact [name=name]').focus();
              //alert('Name required.');
              valid = false;
        }
   
        if (!(formData.email && validateEmail(formData.email))) {
            $('#contact [name=email]').focus();
              //alert('Email required.');
              valid = false;
            }
   
        if (!formData.message) {
            $('#contact [name=message]').focus();
             // alert('Message required.');
             valid = false;
            }
   
        if (valid == false) {
            return;
            }
   
            $('#contact [type=submit]').text('Sending..');
            $.ajax({
              type: $('#contact').attr('method'), // define the type of HTTP verb we want to use (POST for our form)
              url: $('#contact').attr('action'), // the url where we want to POST
              data: formData, // our data object
            })
            .done(function (data) {
            $('#contact')[0].reset();
            $('#contact [type=submit]').text(data);
            setTimeout(function () {
             $('#contact [type=submit]').text('Send Message');
           }, 4000);
         });
   
      });//end form submit handler

    }

    /*--------------------------------------------------------------
    ## Portfolio Load More
    --------------------------------------------------------------*/
    function no_more_portfolio($button) {

       $button.text('No more portfolio item');
       
      setTimeout(function() {
         $button.slideUp(300);
      },4000);

    }

    function portfolio_load() {

      $(document).on('click',".load-more-btn", function() {
        var load_more_button = $(this);
        var loaded = parseInt($(this).attr('data-loaded'));
        var maxload = parseInt($(this).attr('data-maxload'));

        if( maxload <= loaded ) {
          no_more_portfolio(load_more_button);
          return;
        }
       
        load_more_button.text("Loading...");
        $.ajax({
          'url': $(this).data('source'),
          'success' :function(response) {
            var $items = $(response);

           $('#portfolio_box')
            .append($items)
            .isotope('appended',$items);

            loaded++;
            load_more_button
            .attr('data-loaded',   loaded)
            .text("Load more");

              if( maxload <= loaded ) {
                no_more_portfolio(load_more_button);
              }
          }
        });
      });
      
    }

   
})(jQuery); // End of use strict
