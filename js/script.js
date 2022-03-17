$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu').toggleClass('active');
       $('html, body').toggleClass('lock');
   });
   $('.header__languages a').click(function (event) {
      $('.header__languages a').removeClass('active');
      $(this).addClass('active');
   });
   $('.menu__link').click(function (event) {
      $('html, body').removeClass('lock');
      $('.header__burger, .menu').removeClass('active');
   });
});