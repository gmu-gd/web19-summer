$(document).ready(function() {
    // run function on initial page load
    studentHeight();
    menuSlide();
    clickableDiv();

    // run function on resize of the window
    $(window).resize(function() {
      studentHeight();
    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

var textHeight = $('.student h2').outerHeight();

function studentHeight() {
  var headHeight = $('header').outerHeight();
  var pageHeight = $(window).height();
  var height = ((pageHeight - headHeight) / 2);
  var topPadding = ((height - textHeight) / 2);
  $('.student').css("height", height);
  $('.student').css("background-color", height);
  $('.menu-list').css("height", (height * 2));
  $('.student h2').css("padding-top", topPadding);
}

function menuSlide() {
  $('.menu-icon').click(function() {
    $('body').toggleClass('lock-y');
    $('.hamburger').toggleClass('is-active');
    $('.menu-list').toggleClass('menu-animate', 500);
  });
}

function clickableDiv() {
  $('.student').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}
