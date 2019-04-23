(function ($, Drupal){
    Drupal.behaviors.stabletheme = {
        attach: function (context, settings) {
            console.log(settings);
            jQuery(document).ready(function($) {
                // Code that uses jQuery's $ can follow here.
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
              $('#block-views-block-testimonial-view-block-1 .views-row-parent').slick({
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
          //onscroll
          // window.onscroll = function() {myFunction()};
          //   var header = document.getElementById("menu");
          //   var sticky = header.offsetTop;

          //   function myFunction() {
          //     if (window.pageYOffset > sticky) {
          //       header.classList.add("sticky");
          //     } else {
          //       header.classList.remove("sticky");
          //     }
          //   }

          var sticky = $('.menu').offset().top;
          var viewportWidth = $(window).width();
          if(viewportWidth > 1024 ){
            $(window).on('scroll', function(){
              console.log(window.pageYOffset);
              if (window.pageYOffset > sticky) {
                $('.menu').addClass("sticky");
              } else {
                $('.menu').removeClass("sticky");
              }
            });
          }

          // });

        }
      };

    })(jQuery, Drupal);

  // function togglsidebar(){
  //   document.getElementById("sidebar").classlist.toggle('active');
  // }
