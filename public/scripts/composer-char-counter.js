/* 
This script is for CHARACTER COUNTER LIMIT:
*/

  $(document).ready(function() {
    $('#tweet-text').on('input', function() {
      const textInput = $(this).val();
      $(this).parent().find('.counter').text(140-textInput.length) //changes the number
      if (textInput.length > 140) {
        $('.counter').addClass('negative-num');
        $('#error-max-show').slideDown(1000); // for better UX, show error message the moment characters reach limit, not only on submit.
      } else {
        $('.counter').removeClass('negative-num');
       $('#error-max-show').slideUp(1000); // and remove error message the moment characters limit is valid again.
       $('#error-empty').slideUp(1000);
      }
    ;})
});

