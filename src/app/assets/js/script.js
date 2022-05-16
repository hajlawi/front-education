$('.nav li:first').addClass('active');

let showSection = function showSection(section, isAnimate) {
  let
    direction = section.replace(/#/, ''),
    reqSection = $('.section').filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top - 0;

  if (isAnimate) {
    $('body, html').animate({
        scrollTop: reqSectionPos },
      800);
  } else {
    $('body, html').scrollTop(reqSectionPos);
  }

};

let checkSection = function checkSection() {
  $('.section').each(function () {
    let
      $this = $(this),
      topEdge = $this.offset().top - 80,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
     let
        currentId = $this.data('section'),
        reqLink = $('a').filter('[href*=\\#' + currentId + ']');
      reqLink.closest('li').addClass('active').
      siblings().removeClass('active');
    }
  });
};

$('.main-menu, .responsive-menu, .scroll-to-section').on('click', 'a', function (e) {
  e.preventDefault();
  showSection($(this).attr('href'), true);
});

$(window).scroll(function () {
  checkSection();
});
