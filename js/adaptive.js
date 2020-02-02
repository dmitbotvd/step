$('.section-flex button').click(function () {
  var get_id = this.id;
  var get_current = $('.section-block .' + get_id);

  $('.section-block-item').not(get_current).hide(200);
  get_current.show(200);
});
$('#All').click(function () {
  $('.section-block-item').show(200)
})
$(".header-menu").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 700);
});