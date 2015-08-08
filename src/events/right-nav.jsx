'use-strict'
$(function() {
  $('.button-right-nav').on('click', function(e) {
    console.log('click on the right');
    $('.mdl-layout__right-nav').toggleClass('is-visible');
  });
});

