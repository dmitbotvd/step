$('.single-item').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 10000,
});
var window_size = window.matchMedia('(max-width: 768px)');
var window_size = window.matchMedia('(max-width: 992px)');
if(window.matchMedia('(max-width: 992px)').matches){
	$('.multiple-items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
  });
}
if(window.matchMedia('(max-width: 768px)').matches){
	$('.multiple-items').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
  });
}
$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  appendArrows: $('.multiple-items-worker-button'),
  prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
});
$(function () {
  $('.section-flex button').click(function () {
    var get_id = this.id;
    var get_current = $('.section-block .' + get_id);

    $('.section-block-item').not(get_current).hide(200);
    get_current.show(200);
  });
  $('#All').click(function () {
    $('.section-block-item').show(200)
  })
})/*
$(function () {
  $('.section-flex button').click(function () {
    var get_id = this.id;
    var get_current = $('.section-block .' + get_id);

    $('.section-block-item').not(get_current).fadeOut(500, 'linear');
    get_current.fadeIn(500, 'linear');
  });
  $('#All').click(function () {
    $('.section-block-item').fadeIn(500, 'linear')
  })
})*/

$(document).ready(function(){
  $(".header-menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 700);
  });
});