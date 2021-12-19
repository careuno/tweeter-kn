/* 
This script is for CHARACTER COUNTER LIMIT:
*/

  $(document).ready(function() {
    $('#tweet-text').on('input', function() {
      const textInput = $(this).val();
      $(this).parent().find('.counter').text(140-textInput.length) //changes the number

      if (textInput.length > 140) {
        $('.counter').addClass('negative-num');
        $('.new-tweet').addClass('error-margin');
        $('#error-empty').slideUp(0);
        $('#error-max-show').slideDown(1000); // for better UX, show error message the moment characters reach limit, not only on submit.
      } else {
        $('.counter').removeClass('negative-num');
        $('.new-tweet').removeClass('error-margin');
       $('#error-max-show').slideUp(1000); // and remove error message the moment characters limit is valid again.
      
      }
    ;})
});

