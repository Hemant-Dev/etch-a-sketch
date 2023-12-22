const container = document.querySelector('.container');
const gameWindow = document.querySelector('.game-container');
const gridSize = 6;


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


//Logic to change color on entry in the grid div

let gridList = document.querySelectorAll('.grid-row');
console.log(gridList);
Array.from(gridList);
gridList.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'lime';
    });
})



