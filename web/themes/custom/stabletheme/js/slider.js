(function ($, Drupal){
    Drupal.behaviors.stabletheme = {
        attach: function (context, settings) {

            jQuery(document).ready(function($) {
                // Code that uses jQuery's $ can follow here.
                console.log('hello');
                $('.para-slide').slick({
                        infinite: false,
                        dots: true,
                        arrows: false,
                        fade: true,
                        cssEase: 'linear',
                        appendDots:$(".para-slide"),
                });
            });

            jQuery(document).ready(function($) {
                // Code that uses jQuery's $ can follow here.
                $('.views-row').slick({
                    infinite: false,
                    dots: true,
                    arrows: false,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'linear',
                    appendDots:$(".views-row"),
                });
            });

            $('.original-banner').slick({
              centerMode: true,
              centerPadding: '60px',
              arrows: false,
              slidesToShow: 6,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 6
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
            });

          $('.toggle-btn').on('click', function (){
            $('.sidebar').animate({width: 'toggle'}, 1000);
            $(this).toggleClass("active");
          });

          // $('.toggle-menu').on('click', function (){
          //   $('.sub-menu').animate({width: 'toggle'}, 1000);
          //   $('sub-menu').toggleClass("display-menu");
          // });

        }
      };

    })(jQuery, Drupal);

  // function togglsidebar(){
  //   document.getElementById("sidebar").classlist.toggle('active');
  // }
