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
                $('#block-views-block-testimonial-view-block-1 .views-view-grid .views-row').slick({
                    infinite: false,
                    dots: true,
                    arrows: false,
                    fade: false,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    cssEase: 'linear',
                });                
                
            });
        }
      };
    })(jQuery, Drupal);
