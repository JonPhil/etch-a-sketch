document.addEventListener('DOMContentLoaded', () => {
    makeGrid(16);
});

const container = document.querySelector('.container');
const clearButton = document.querySelector('#clear');
const gridSize = document.querySelector('#grid-size');
const grid = document.querySelector('#grid');

let mouseDown = false;
container.onmousedown = (e) => {
    mouseDown = true;
    e.preventDefault();
};
container.onmouseup = () => (mouseDown = false);

grid.addEventListener('submit', (e) => {
    e.preventDefault();
});
grid.addEventListener('submit', () => {
    let size = gridSize.value
    resetGrid();
    makeGrid(size);
})

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.addEventListener('mousedown', changeColor);
        box.addEventListener('mouseover', changeColor);
        container.appendChild(box);
    };
};
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    } else {
        e.target.style.backgroundColor = 'black';
    }
};
clearButton.addEventListener('click', () => {
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = '';
    }
});
function resetGrid() {
    container.innerHTML = '';
} 