$(document).ready(function () {
  $('.calc select').change(function () {
    var edition = $('select#cart_edition').val();
    var paper = $('select#card_paper').val();
    var color = $('select#card_color').val();
    var paper_ratio = $('select#card_paper option:selected').attr('data-paper-ratio');
    var print_file = $('select#card_color option:selected').attr('data-print-file');

    var division = 30;
    var final_edition = edition / division;
    var print = $('select#card_color option:selected').attr('data-print');

    var price = final_edition * paper_ratio + parseInt(print_file) + final_edition*print;
    $('span#final_price').text(price);
  })
});
