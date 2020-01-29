$('.multiple-items').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  appendArrows: $('.multiple-items-worker-button'),
  prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true">Туда</i></button>',
  nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true">Сюда</i></button>',
});