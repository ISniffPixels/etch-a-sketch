'use strict'

// SIZE DIMENSIONS OF DRAW AREA -WIDTH AND HEIGHT-
const drawArea = document.querySelector('.drawArea');
const drawAreaWidthHeight = 800;
const pixelSlider = document.querySelector('#slider');
const output = document.querySelector('output');
// const rainbowMode = document.querySelector('#rainbowMode');
// const eraser = document.querySelector('#eraser');
const resetPixels = document.querySelector('#resetPixels');
     
// SETS SIZE DIMENSIONS OF DRAW AREA DYNAMICALLY
drawArea.style.width = `${drawAreaWidthHeight}px`;
drawArea.style.height = `${drawAreaWidthHeight}px`;

function createPixel(pixelQty) {
    drawArea.innerHTML = '';

    for(let p = 0; p < (pixelQty * pixelQty); p++) {
        const createPixel = document.createElement('div');
       
        createPixel.style.width = `${(drawAreaWidthHeight / pixelQty)}px`;
        createPixel.style.height = `${(drawAreaWidthHeight / pixelQty)}px`;
        createPixel.classList.add('pixelStyle');

        createPixel.addEventListener('mouseover', colorPixel);
        drawArea.appendChild(createPixel);
    }
}

// INVOKES FIRST PIXEL GRID AREA
createPixel(pixelSlider.value);
output.textContent = `${pixelSlider.value} x ${pixelSlider.value}`;

// CREATES A NEW PIXEL GRID BASED ON SLIDER VALUE CHANGES 16-64
pixelSlider.addEventListener('input', ()=> {
    const pixelSize = pixelSlider.value;
    const output = document.querySelector('output');
    
    createPixel(pixelSize);
    output.textContent = `${pixelSlider.value} x ${pixelSlider.value}`;
});


// ADDEVENT LISTENER WILL ERASE CHILD NODES FROM PARENT 
resetPixels.addEventListener('click', () => {
    drawArea.childNodes.forEach((e)=> e.style.backgroundColor = null);
});

// GENERATES A RANDOM NUMBER FROM 0 - 255 AND ITS INVOKATION IS USED AS AN ARGUEMENT INSIDE THE COLORPIXEL FUNCTION
function rgbRandomNum(max, min) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}

let click = true;

// COLORS UPON MOUSE HOVER ANY ELEMENT THE THIS KEYWORD BINDS TOO
function colorPixel() {
    if(click) {
        this.style.backgroundColor = `rgb(0,0,0)`;
    } else {
        this.style.backgroundColor = `rgb(${rgbRandomNum(0,255)},${rgbRandomNum(0,255)},${rgbRandomNum(0,255)},${Math.random() * 255})`;
    }
}

// LISTENER CALLBACK FUNCTION SWITCHES CLICK BOOLEAN VALUE BETWEEN TRUE AND FALSE
document.body.addEventListener('click', ()=> {
    click = !click;
});