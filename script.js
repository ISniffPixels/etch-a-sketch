'use strict'

// SIZE DIMENSIONS OF DRAW AREA -WIDTH AND HEIGHT-
const drawAreaWidthHeight = 800;
const drawArea = document.querySelector('.drawArea');

// SETS SIZE DIMENSIONS OF DRAW AREA DYNAMICALLY
drawArea.style.width = `${drawAreaWidthHeight}px`;
drawArea.style.height = `${drawAreaWidthHeight}px`;

function createPixel(pixelQty) {
    for(let p = 0; p < pixelQty * pixelQty; p++) {
        const createPixel = document.createElement('div');

        createPixel.style.width = `${(drawAreaWidthHeight / pixelQty)}px`;
        createPixel.style.height = `${(drawAreaWidthHeight / pixelQty)}px`;
        
        createPixel.classList.add('pixelStyle');
        drawArea.appendChild(createPixel);
    }
}

createPixel(16);