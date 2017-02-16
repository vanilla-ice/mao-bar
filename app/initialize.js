import $ from "jquery";

$(document).ready(() => {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const height = +$('#height').val();
    const square = +$('#square').val();
    const power = square*height*30/1000;
    $('#power').val(power);
    const data = $(this).serializeArray();
    console.log(data);
  })
  $('#square-range').on('change mousemove', function(){
  $('#square').val($(this).val());});
  $('#height-range').on('change mousemove', function(){
  $('#height').val($(this).val());});
  $('#price-range').on('change mousemove', function(){
  $('#price').val($(this).val());});
});
