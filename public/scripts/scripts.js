document.addEventListener("input", (event) => {
  console.log('this is for input', event);
});
document.addEventListener("keyup", (event) => {
  console.log('this is for keyup',event);
});
document.addEventListener("keypress", (event) => {
  console.log('this is for keypress',event);
});
document.addEventListener("keydown", (event) => {
  console.log('this is for keydown',event);
});

//jQuery shorthand
jQuery() === $()

//jQuery uses CSS syntax/selectors to target it. 

//FOR FINDING THINGS IN THE DOM

      document.getElementById('main-item');
      //prints 
      //<ol id="main-list"> ... </ol> //retrieves that actual DOM node

      //instead looks like 
      $('main-item')

      // you can also DRILL DOWN 
      $('main-item li') - //grabs li the child of main-list
      $('main-item > li') - //grabs

      // you can go back to the browser console and use jQuery since you've loaded it into your file with the script tag. Now you can enter:

      //$('main-item')  OR
      //$('.content')

      //Prints: 
      //jQuery.fn.init [ol#main-list]
      //everytime you see jQuery.fn.init IS GOOD, it means it found an element

      //click drop down, you get ALOT MORE THAN DOM node, you get it wrapped in a jQuery Object

//CREATE Things for the DOM
$('<p>'); //--> creates a p tag 
$('p'); //--> find a p tag

//create an li; give it the text 'water', append it to the DOM


//LONG WAY
//https://www.w3schools.com/jsref/met_node_appendchild.asp
var node = document.createElement("LI");                 // Create a <li> node
var textnode = document.createTextNode("Water");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

//SHORT jQuery Way
const myLi = $('<li>');
myLi.text('water'); // <li>water</li>
$('main-list').append(myLi);

//runs a callback when the DOM is ready to be manipulated with jQuery, without it we might accidentally try to access HTML elements that the browser hasn't had the chance to load, causing errors
$(document).ready(function() {
  console.log('loadeddd')
});