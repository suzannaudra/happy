var nextWord = function () {
  var quote = [
    "What we fear doing most is someting we need to do.",
    "What can I learn from this?",
    "Everything is figreoutable",
    "What's your end game?",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful."
  ];
  var randomItem = quote[Math.floor(Math.random() * quote.length)];
  document.getElementById("nextWord").innerHTML = randomItem;
};
