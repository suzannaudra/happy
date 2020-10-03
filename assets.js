//Random Quote generator function

var nextWord = function () {
  var quote = [
    "What we fear doing most is someting we need to do.",
    "What can I learn from this?",
    "Everything is figreoutable",
    "What's your end game?",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    "He whos asks a question remains a fool for 5 minutes he who does not remains a fool forever.",
    "All our dreams can come true, if we have the courage to pursue them.",
    "The secret of getting ahead is getting started.",
    "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Your passion is waiting for your courage to catch up",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "Great things are done by a series of small things brought together.",
    "Unsuccessful people make their decisions based on their current situations. Successful people make their decisions based on where they want to be.", 
    "Trust because you are willing to accept the risk, not because it's safe ot certain.",
    "Good things come to people who wait, but better things come to those who go out and get them.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Try not to become a person of success, but rather try to become a person of value.",
    "No one can make you feel inferior without your consent.",
    "If you're going through hell keep going.",
    "When you stop chasing the wrong things, you give the right things a chance to catch you."

  ];
  var randomItem = quote[Math.floor(Math.random() * quote.length)];
  document.getElementById("nextWord").innerHTML = randomItem;
  
  var x = document.getElementById("directions");
  if (x.style.display !== "none") {
    x.style.display = "none";
  }
  };




$(document).ready(function(){
  $(".prev-slide").click(function(){
      $("#myCarousel").carousel('prev');
  });
});
$(document).ready(function(){
  $(".next-slide").click(function(){
      $("#myCarousel").carousel('next');
  });
});
