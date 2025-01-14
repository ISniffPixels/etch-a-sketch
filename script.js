'use strict'

// SIZE DIMENSIONS OF DRAW AREA -WIDTH AND HEIGHT-
const drawAreaWidthHeight = 800;
const drawArea = document.querySelector('.drawArea');

// SETS SIZE DIMENSIONS OF DRAW AREA DYNAMICALLY
drawArea.style.width = `${drawAreaWidthHeight}px`;
drawArea.style.height = `${drawAreaWidthHeight}px`;

// COLORS UPON MOUSE HOVER ANY ELEMENT THE THIS KEYWORD BINDS TOO
function colorPixel() {
    this.style.backgroundColor = 'black';
}

function createPixel(pixelQty) {
    for(let p = 0; p < pixelQty * pixelQty; p++) {
        const createPixel = document.createElement('div');

        createPixel.style.width = `${(drawAreaWidthHeight / pixelQty)}px`;
        createPixel.style.height = `${(drawAreaWidthHeight / pixelQty)}px`;
        
        createPixel.classList.add('pixelStyle');
        drawArea.appendChild(createPixel);

        createPixel.addEventListener('mouseover', colorPixel);
    }
}

createPixel(64);

drawArea