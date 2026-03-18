/* custom.js - Absolutely Fabulous by June */
(function ($) {
  'use strict';

  /* ── 1. Remove loader class so page becomes visible ── */
  $(document).ready(function () {
    $('body').removeClass('loaded');
    $('.icon-load').hide();
  });

  /* ── 2. Image loading: swap data-src → src (or background-image) ── */
  function loadImages() {
    /* Regular <img> tags with data-src */
    $('img[data-src]').each(function () {
      var src = $(this).attr('data-src');
      if (src) {
        $(this).attr('src', src).removeAttr('data-src');
      }
    });

    /* Non-img elements with data-src (div backgrounds like .discount, .info-blocks__item) */
    $('[data-src]').not('img').each(function () {
      var src = $(this).attr('data-src');
      if (src) {
        $(this).css('background-image', 'url(' + src + ')').removeAttr('data-src');
      }
    });
  }

  /* Run immediately on DOM ready and again after a short delay for any late elements */
  $(document).ready(function () {
    loadImages();
    setTimeout(loadImages, 300);
  });

  /* ── 3. Product tabs ── */
  $(document).ready(function () {
    $(document).on('click', '.tabs li a', function (e) {
      e.preventDefault();
      var $tab   = $(this).closest('li');
      var target = $(this).attr('href');

      $tab.siblings().removeClass('active');
      $tab.addClass('active');

      var $wrap = $tab.closest('.tab-wrap');
      $wrap.find('.tab-cont').addClass('hide');
      $wrap.find(target).removeClass('hide');
    });
  });

  /* ── 4. Mobile hamburger menu ── */
  $(document).ready(function () {
    $('.js-btn-menu').on('click', function () {
      $(this).toggleClass('active');
      $('.header-nav').toggleClass('open');
    });

    /* Close top announcement bar */
    $('.js-header-top-close').on('click', function () {
      $('.header-top').slideUp(200);
    });
  });

  /* ── 5. Sticky header on scroll ── */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      $('.header').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
    }
  });

  /* ── 6. Products slider (slick) – only if slick loaded ── */
  $(document).ready(function () {
    if ($.fn.slick) {
      $('.js-products-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768,  settings: { slidesToShow: 2 } },
          { breakpoint: 480,  settings: { slidesToShow: 1 } }
        ]
      });
    }
  });

})(jQuery);
