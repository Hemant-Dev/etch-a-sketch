const container = document.querySelector('.container');
const gameWindow = document.querySelector('.game-container');
const gridSize = 6;
const colorBtn = document.querySelector('.colorBtn');
const eraseBtn = document.querySelector('.eraseBtn');


//Created obj
createColumns(gridSize);
function createColumns(gridSize){
    for(let i=0; i<gridSize; i++){
        const gridDiv = document.createElement('div');
        gridDiv.classList.add('grid-column');
        // gridDiv.textContent = "Grid";
        gameWindow.appendChild(gridDiv);
        createRow(gridSize, i);
    }
}

function createRow(gridSize, row){
    for(let j=0; j<gridSize; j++){
        const newRow = document.createElement('div');
        newRow.classList.add('grid', 'grid-row');
        // newRow.textContent = "Grid";
        let listOfColumns = document.querySelectorAll('.grid-column');
        listOfColumns[row].appendChild(newRow);
        // console.log(listOfColumns);
    }
}

//Logic to change Color when changeColor Btn is clicked
let color = '';   //Global color var that it uses
colorBtn.addEventListener('click', changeColor);
function changeColor(e){
    color = e.target.value;
}
function getColor(){
    return color;
}

//Logic to change color on entry in the grid div

let gridList = document.querySelectorAll('.grid-row');
// console.log(gridList);
Array.from(gridList);
gridList.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = getColor();
    });
})


//Logic to Reset the whole grid to initial state
eraseBtn.addEventListener('click', reset);
function reset(){
    gridList.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
}
