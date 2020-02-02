
var window_size = window.matchMedia('(max-width: 992px)');


if(window.matchMedia('(max-width: 992px)').matches){
	$('.multiple-items').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendArrows: $('.multiple-items-worker-button'),
  prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
  nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  });
} else {
  $('.multiple-items').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendArrows: $('.multiple-items-worker-button'),
    prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
  });
}

$('.single-item').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 10000,
});


 
/*
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


  

