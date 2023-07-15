// let color = "black";

// function populateBoard(size){
//     let board = document.querySelector(".container")
//     let squares = board.querySelectorAll("div");
//     squares.forEach((div) => div.remove());
//     board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//     board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
//     //  container.appendChild(div).classList.add('box')

//      let amount = size * size;
//      for(let i = 0;i < amount; i++){
//         let square = document.createElement("div");
//         square.addEventListener("mouseover", colorSquare);
//         // square.style.border = '1px solid red';
//         square.style.backgroundColor = 'blue'
//         board.insertAdjacentElement("beforeend", square);
//      }

// }
// populateBoard(16);

// function  reSize(input){
//     if(input >=2 && input <= 100){
//         populateBoard(input)
//     }
//     else{
//         console.log("too many squares")
//     }
// }

// function colorSquare(){
//     if(click){
//     if(color === "random"){
//         this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     }
//     else{
//         this.style.backgroundColor = color;
//     }
// }
// }

// function changeColor(choice) {
//     color = choice;
// }

// function resetBoard() {
//     let board = document.querySelector(".board");
//     let squares = board.querySelectorAll("div");
//     squares.forEach((div) => div.remove())
//     squares.forEach((div) => div.style.backgroundColor = 'white')
// }

// document.querySelector("body").addEventListener("click", (e) => {
//     if(e.target.tagName != "BUTTON"){
//         click = !click;
//         if(click) {
//             document.querySelector(".mode").textContent = "Mode: Coloring";
//         }
//         else{
//             document.querySelector(".mode").textContent = "Mode: Not Coloring";
//         }
//     }
// });

const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnGray = document.createElement('button')
const btnRGB = document.createElement('button')
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('buttons')


function CreateDivs(col, rows){
    for(let i = 0;i < (col*rows); i++){
        const div = document.createElement('div')
        div.style.border = '1px solid red'
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}

CreateDivs(16,16)


function grayColor(){
    const boxes = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () =>{
            let Rnum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${Rnum},${Rnum},${Rnum})`
        }))    
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn')
}
grayColor()

function blackColor(){
    const boxes = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = 'black'
        }))   
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor()

function rgbColor(){
    const boxes = container.querySelectorAll('.box')
    btnRGB.textContent = 'RGB'
    btnRGB.addEventListener('click', () =>{
        boxes.forEach(box => box.addEventListener('mouseOver', () =>{
        let R =Math.floor(Math.random() * 255)
        let B =Math.floor(Math.random() * 255)
        let G =Math.floor(Math.random() * 255)
        box.style.background = `rgb(${R}, ${B}, ${G})`

        }))    
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn')
}
rgbColor()

function reSet() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
}
function reSize(){
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let user = prompt('what size do you want to grid to be')
        if(user === null || user <1 ){
            reSet()
            CreateDivs(16,16)
            blackColor()
            grayColor()
            rgbColor()
        }
        else{
            reSet()
            CreateDivs(user, user)
            blackColor()
            grayColor()
            rgbColor()  
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
resize()



