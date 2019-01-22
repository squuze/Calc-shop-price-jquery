$(document).ready(function () {
  $('.calc select').change(function () {
    var edition = $('select#cart_edition').val();
    console.log(edition);
  })
});
