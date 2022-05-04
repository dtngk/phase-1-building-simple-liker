// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let click = document.querySelectorAll(".like-glyph");

for (let ele of click){
  ele.addEventListener('click', fillHearts);
}

function fillHearts(ele){

  let node = ele.target;

  mimicServerCall()
    .then (function (clicked){
      (node.innerText === FULL_HEART ? (node.innerText = EMPTY_HEART) : node.innerText = FULL_HEART);
    })
    .catch(function (error){

      document.getElementById("modal").className = "";

      setTimeout(function (){
        document.getElementById("modal").className = "hidden";
      }, 3000)
    })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
