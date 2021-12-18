/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(() => { //once document is loaded/ready, load the tweets, toggle the tweet form and listen for a tweet post
  
  loadTweets();

  $(".write-new-tweet").click(function(){
    $(".new-tweet").slideToggle();
    $('#tweet-text').focus(); //cursor on text area
  });

  const $form = $("#new-post-form");
  $form.on("submit", onSubmit);


  //$form.on("keypress", onSubmit);
  $('#tweet-text').on('keydown', function(event) {
    console.log('event.keyCode', event.keyCode)
    if (event.keyCode === 13) {
      console.log('hello')
      $('.tweet-button').click();

    }
  });

});


//------------------------------------------------ FUNCTIONS ----------------------------------------------------------//

const onSubmit = function (event) {
  event.preventDefault();
  const text = $('#tweet-text').val();
  const counter = text.length;
  const serializedData = $(this).serialize();

  //Browser displays error when ---- tweet input is empty when submitting
  if (!text) {
    $('#error-empty').slideDown(1000);
  } else {
    $('#error-empty').slideUp(1000);
  }

  //Browser displays error when ---- content is too long when submitting
    if (counter > 140) {
      $('#error-max-show').slideDown(1000);
     // $('#error-max-show').slideUp(3000);
    } else {
    
      $.post('/tweets', serializedData)
        .then(()=>{
          $('#tweet-text').val(''); //if successful submission clear text field
          $('#tweet-text').focus(); //return to input for another post
          $('.counter').val('140');
          loadTweets();
        }).catch(error => console.log(error));
    }

   
};

const loadTweets = function() {
  $.get('/tweets') //using AJAX to fetch get data
    .then((response) => {
      $("#all-tweets").empty();
      renderTweets(response);
    })
    .catch((error) => {
      console.log('Error while loading tweets', error)
    });
};

const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    const $newTweet = createTweetElement(tweet);
    $("#all-tweets").prepend($newTweet); //displays the tweets with newest at the top
  }
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweetData) => {
  const username = tweetData.user.name; // better to not name in variables, not reused, so unnecessary lines of code
  const avatar = tweetData.user.avatars;
  const userHandle = tweetData.user.handle;
  const timePosted = tweetData.created_at;
  const postText = tweetData.content.text;
  const safeHTML = escape(postText);
  // const $postText = $('<textarea>').text(`Post input: ${tweetData.content.text}`);
//{ <p id='individ-tweet'= $('<h3>').text(`Author: ${post.userId}`);}

  const $tweet = $(`
  <article class='tweet'>
    <header>
      <div class='profile-icon-name'>
        <img src='${avatar}' alt='avatar' width=40 height=40 >
        <h5>${username}</h5>
      </div>
      <h5 id='handle'>${userHandle}</h5>
    </header>
    <p id='individ-tweet'>${safeHTML}</p>
    <footer>
      <p>${timeago.format(timePosted)}</p> 
      <div class="cta-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </footer>
      </div>
  </article>
`); //timeago converts time to how long ago it was posted


  return $tweet;
};






