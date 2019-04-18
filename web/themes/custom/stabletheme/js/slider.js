(function ($, Drupal){
    Drupal.behaviors.stabletheme = {
        attach: function (context, settings) {

            jQuery(document).ready(function($) {
                // Code that uses jQuery's $ can follow here.
                console.log('hello');
                $('.para-slide').slick({
                        infinite: false,
<<<<<<< HEAD
=======

>>>>>>> b0c28013a64fefdbb003ff0dcf6a499a78991bab
                        dots: true,
                        arrows: false,
                        fade: true,
                        cssEase: 'linear',
                        appendDots:$(".para-slide"),
<<<<<<< HEAD
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
=======
                });
>>>>>>> b0c28013a64fefdbb003ff0dcf6a499a78991bab
            });
        }
      };
    })(jQuery, Drupal);
