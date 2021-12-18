 //------------------------ Function for Back to Top Button -------------------------------------------
 
$(() => { 
  $('.back-to-top').fadeOut();
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    // Show button after 100px
    const showAfter = 100;
    if ($(this).scrollTop() > showAfter ) { 
      console.log('fadein--->')
     $('.back-to-top').fadeIn();
    } else { 
      console.log('fadeout--->')
     $('.back-to-top').fadeOut();
    }
   });
   
   //Click event to scroll to top
   $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
   });

});
 