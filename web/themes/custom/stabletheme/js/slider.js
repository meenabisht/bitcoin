(function ($, Drupal){
    Drupal.behaviors.demoblock = {
        attach: function (context, settings) {

            jQuery(document).ready(function($) {
                // Code that uses jQuery's $ can follow here.
                console.log('hello');
                $('.para-slide').slick();
            });
        }
      };
    })(jQuery, Drupal);
