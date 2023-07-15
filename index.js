
let color = "black";
function populate(col,row) {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  container.style.gridTemplateColumns = `repeat(${col} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${row} , 1fr)`;
  

  let amount = (col,row) * (col,row);
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell");
    square.style.border = '1px solid green'
    container.style.backgroundColor = "purple";
    
    square.addEventListener("mouseover", colorSquare);
    container.insertAdjacentElement("beforeend", square);
  }
}

populate(16,16);


function changeSize(input) {
  input >= 2 && input <= 100 ? populate(input) : console.log(" to many squares");
};


function colorSquare() {
  color === "random" ? this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)` : this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let container = document.querySelector(".container");
  let squares = container.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "purple"));
}
