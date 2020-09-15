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
    "Unsuccessful people make their decisions based on their current situations. Successful people make their decisions based on where they want to be."
  ];
  var randomItem = quote[Math.floor(Math.random() * quote.length)];
  document.getElementById("nextWord").innerHTML = randomItem;
};
