/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];


$(() => {
  //once browser is loaded, you will have listen to a submit tweet from the browser
  //that will trigger a createTweetElement function that will have an ajax request
  //with AJAX request, we will combine jQuery methods to reference the DOM and create new elements for the DOM to render
  
  $("#all-tweets").empty(); //to prevent repeated post rendering
  renderTweets(data);

  // add an event listener that listens for the submit event
  const $form = $("#new-post-form");
  $form.on("submit", onSubmit);
});


const createTweetElement = (tweetData) => {
  const username = tweetData.user.name; // better to not name in variables, not reused, so unnecessary lines of code
  const avatar = tweetData.user.avatars;
  const userHandle = tweetData.user.handle;
  const postText = tweetData.content.text;
  // const $postText = $('<p id'in>').text(`Post: ${tweetData.contet.text}`);
//<p id='individ-tweet'= $('<h3>').text(`Author: ${post.userId}`);
  const timePosted = tweetData.created_at;

  const $tweet = $(`
  <article class='tweet'>
    <header>
      <div class='profile-icon-name'>
        <img src='${avatar}' alt='avatar' width=40 height=40 >
        <h5>${username}</h5>
      </div>
      <h5 id='handle'>${userHandle}</h5>
    </header>
    <p id='individ-tweet'>${postText}</p>
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

const renderTweets = function (tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    // calls createTweetElement for each tweet
    const $newTweet = createTweetElement(tweet);
    // calls createTweetElement for each tweet
    $("#all-tweets").prepend($newTweet);
  }
};


const onSubmit = function (event) {
  event.preventDefault();
  const text = $('#tweet-text').val();
  const counter = $('.counter').val();

  //The user should be given an error that their tweet is not present
  if (!text) {
   return alert("Can't submit empty tweet");
  } 

  // content is too long
    if (counter.length > 140) {
      return alert("Nobody reads long tweets");
    }

  const serializedData = $(this).serialize();

  $.post('/tweets', serializedData)
    .then(() => {
    //load tweets
    console.log('success')
  });
};

const loadTweets = function() {
  $.get('/tweets') //using AJAX to fetch get data
    .then(() => {
      console.log('new', 'Success!')
    })
};

loadTweets()


// create an AJAX POST request in client.js that sends the form data to the server.

// 


// // content is too long
//     if ($('counter') > 140) {
//       alert("Nobody reads long tweets");
//     }
// //The form should not be cleared

// //The form should not submit

// console.log(serializeData);
//either pass a callback as a parameter or let it return a promise and apply .then
//  $.post('/api/posts', serializedData).then(() => {})
// $.post('/tweets', serializedData,(response) => {
//   console.log(response)
// });

//fetchPosts();

// prevent the default behaviour of the submit event (data submission and page refresh)
