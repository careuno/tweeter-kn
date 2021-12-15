/* 
This script is for CHARACTER COUNTER
*/


// $(document).ready(function() {
//   $('#tweet-text').on('input', function() {
//     const textInput = $(this).val();
//     $('.counter').text(140-textInput.length) //changes the number
//     if (textInput.length > 140) {
//       $('.counter').addClass('negative-num');
//     } else {
//       $('.counter').removeClass('negative-num');
//     }
//   ;})


  $(document).ready(function() {
    $('#tweet-text').on('input', function() {
      const textInput = $(this).val();
      $(this).parent().find('.counter').text(140-textInput.length) //changes the number
      if (textInput.length > 140) {
        $(this).parent().find('.counter').addClass('negative-num');
      } else {
        $(this).parent().find('.counter').removeClass('negative-num');
      }
    ;})
});

