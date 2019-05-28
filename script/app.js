(() => {
  //stub
  console.log('fired!');

  //variables

  //CONST is short for CONSTANT -> variables that should NOT change
  const piecesBoard = document.querySelector(".puzzle-pieces"),
        puzzleBoard = document.querySelector(".puzzle-board"),
        puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
        dropZones = document.querySelectorAll(".drop-zone");

  let draggablePieces = piecesBoard.querySelectorAll("img");

  //debugger;

  //functions

  function switchImage() {
    console.log(this);
  }

  //events
  puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage); });

  //loop throughout the draggable images
  draggablePieces.forEach(piece => {
    piece.addEventListener("dragstart", function(e) {
      console.log("dragging...");

      //dataTransfer object has TWO methods, a setter and a getter
      //set data on the drag, and retrieve it on the drop
      e.dataTransfer.setData("text/plain", this.id);
    });
  });

  //this is the dragover and drop functionality => this is for the drop Zones
  dropZones.forEach(zone => {
    //allow user to drag over an element
    zone.addEventListener("dragover", function(e) {
      e.preventDefault();
      console.log("dragged sumpin over me");
    });

    //allow a user to drop an element
    zone.addEventListener("drop", function(e) {
      e.preventDefault();
      console.log('you dropped sumpin on me');

      let draggedElement = e.dataTransfer.getData("text/plain");
      console.log('you dragged: ', draggedElement);

      //add the image to the drop zones
      e.target.appendChild(document.querySelector(`#${draggedElement}`));
    });
  })

})();
