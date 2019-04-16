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
        }
      };
    })(jQuery, Drupal);
