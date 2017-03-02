import $ from "jquery";

$(document).ready(() => {

  $('.my-order').on('click', function() {
    $('.popup').toggleClass('popup-opened');
  });


});
