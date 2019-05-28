(() => {
  //stub
  console.log('fired!');
  //variables
  let headline = document.querySelector("h1"),
      subhead = document.querySelector("h3");
      theButton = document.querySelector("button")
  //functions
  function changeText() {
    headline.textContent = "Now I'm different!";
    subhead.textContent = "hey me too. but that's ok.";
  }
  //events
  theButton.addEventListener("click", changeText)
})();
