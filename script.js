const container = document.querySelector('.container');
const gameWindow = document.querySelector('.game-container');
const colorBtn = document.querySelector('.colorBtn');
const eraseBtn = document.querySelector('.eraseBtn');
const sixBtn = document.querySelector('.six');
const twelveBtn = document.querySelector('.twelve');
const twentyFourBtn = document.querySelector('.twentyFour');

let gridSize = 6;
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
let color = 'red';   //Global color var that it uses
colorBtn.addEventListener('click', changeColor);
function changeColor(e){
    color = e.target.value;
}
function getColor(){
    return color;
}

//Logic to change color on entry in the grid div
function getGrid(){
    const gridList = document.querySelectorAll('.grid-row');
    return Array.from(gridList);
}
let gridList = getGrid();
// console.log(gridList);
function coloringTheGrid(){
    gridList = getGrid();
    gridList.forEach((element) => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = getColor();
        });
    });
}
gridList.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = getColor();
    });
});

//Logic to Reset the whole grid to initial state
eraseBtn.addEventListener('click', erase);
function erase(){
    gridList.forEach((element) => {
        element.style.backgroundColor = 'white';
    });
}


//Logic to change Grid Size using button provided
sixBtn.addEventListener('click', () => {
    resetGrid();
    createColumns(gridSize = 6);
    changeGridDimensions();
    coloringTheGrid();
});
twelveBtn.addEventListener('click', () => {
    resetGrid();
    gridSize = 12;
    createColumns(gridSize);
    changeGridDimensions();
    coloringTheGrid();
});
twentyFourBtn.addEventListener('click', () => {
    resetGrid();
    gridSize = 24;
    createColumns(gridSize);
    changeGridDimensions();
    coloringTheGrid();
});


//Logic to reset the whole grid
function resetGrid(){
    const gameWindow = document.querySelector('.game-container');
    Array.from(gameWindow);
    while(gameWindow.firstChild){
        gameWindow.firstChild.remove();
    }
}

function changeGridDimensions(){
    const gridList = document.querySelectorAll('.grid');
    Array.from(gridList);
    let gridDimensions = 80 + 'px';
    if(gridSize === 12)
        gridDimensions = 40 + 'px';
    else if(gridSize === 24)
        gridDimensions = 20 + 'px';
    else
        gridDimensions = 80 + 'px';
        
    gridList.forEach((element) => {
        element.style.height = gridDimensions;
        element.style.width = gridDimensions;
    });

}