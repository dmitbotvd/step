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

    $('.section-block-item').not(get_current).hide(100);
    get_current.show(100);
  });
  $('#All').click(function () {
    $('.section-block-item').show(100)
  })
})