$('document').ready(function() {
  homePositioning();
  mainHover();
  slider();
});

function homePositioning() {
  var headerHeight = $('.header').outerHeight();
  var windowHeight = $(window).outerHeight();
  var h2Height = $('.section h2').outerHeight();
  var sectionHeight = windowHeight - headerHeight;
  var h2Margin = (sectionHeight - h2Height) / 2;
  $('.section').css('height', sectionHeight);
  $('.bg-color').css('height', sectionHeight);
  $('.section h2').css('margin-top', h2Margin);

}

function mainHover() {
  $('#collection a').hover(function() {
    $('#collection').toggleClass('grayscale');
  });
  $('#about a').hover(function() {
    $('#about').toggleClass('grayscale');
  });
}

function slider() {
  $('.center').slick({
    centerMode: true,
    arrows: true,
    slidesToShow: 3,
    swipe: false,
  });
  $('.slick-current .caption').removeClass('hide');
  $('.slick-next').click(function() {
    $('.caption').addClass('hide');
    $('.slick-current .caption').removeClass('hide');
  });
  $('.slick-prev').click(function() {
    $('.caption').addClass('hide');
    $('.slick-current .caption').removeClass('hide');
  });
}
