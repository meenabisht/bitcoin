(function ($, Drupal, window, document) {
  'use strict';
  Drupal.behaviors.GrofersConfig = {
    attach: function (context, settings) {

      $('.slider-wrapper', context).slick({
        infinite: true,
        autoplay: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
        ]
      });

      $('.field--name-field-images', context).slick({
        infinite: true,
        autoplay: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
        ]
      });

      $('.testimonial-wrapper', context).slick({
        infinite: true,
        autoplay: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
        ]
      });


      $('.field--name-field-team-members', context).slick({
        slidesToShow: 3,
        arrows: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        draggable: false,
        focusOnSelect: true,
        centerPadding: '100px',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: true,
              centerMode: true,
              variableWidth: false,
              slidesToShow: 1,
              centerPadding: '80px'
            }
          }
        ]
      });
    }
  };

  

}(jQuery, Drupal, this, this.document));
