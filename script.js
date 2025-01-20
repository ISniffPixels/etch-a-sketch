'use strict'

// SIZE DIMENSIONS OF DRAW AREA -WIDTH AND HEIGHT-
const drawArea = document.querySelector('.drawArea');
const drawAreaWidthHeight = 800;
const pixelSlider = document.querySelector('#slider');
const output = document.querySelector('output');
const colorMode = document.querySelector('#colorMode');
const eraserBtn = document.querySelector('#eraser');
const rainBowMode = document.querySelector('#random_color');
const resetPixels = document.querySelector('#reset_pixels');
const erasePixels = document.querySelector('#erase_pixels');
const printGrid = document.querySelector('#print_grid');
const containerFrame = document.querySelector('.container_frame');

// CONDITIONAL STATE THAT WILL DETERMINE WHAT COLOR MODE YOU'RE ON
let currentMode = 'color';

// BOOLEAN VALUE TO DETERMINE WHETHER OR NOT YOU'RE DRAWING TO THE SCREEN
let click = false;

// LISTENER CALLBACK FUNCTION SWITCHES CLICK BOOLEAN VALUE BETWEEN TRUE AND FALSE
document.body.addEventListener('click', ()=> {
    click = !click;
});
     
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

// INVOKES INITIAL PIXEL GRID AREA
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
        containerFrame.style.cssText= 'none';
    setTimeout(()=> {
        containerFrame.style.cssText= 'animation: shake 2s ease 1 both';
    }, 200);
    setTimeout(()=> {
        drawArea.childNodes.forEach((e)=> {
            e.style.backgroundColor = null 
            e.style.boxShadow = null;
        });
    }, 1000)
});

// SWITCH COLOR MODES AND ACTIVATE ERASER BASED ON BUTTONS
colorMode.addEventListener('input', () => {
    currentMode = 'color';
});

rainBowMode.addEventListener('click', () => {
    currentMode = 'rainbow';
});

erasePixels.addEventListener('click', () => {
    currentMode = 'eraser';
});

// TOGGLES GRID LINES APPLIED TO CHILDREN DIVS ON DRAW AREA ON OR OFF
printGrid.addEventListener('click', ()=> {
    drawArea.childNodes.forEach((pixel)=> {
        pixel.classList.toggle('pixelStyle');
    });
});

// FUNCTION TO COLOR PIXELS BASED ON CURRENT MODE
function colorPixel() {
    if (!click) return;

    if (currentMode === 'color') {
        this.style.backgroundColor = colorMode.value;
        this.style.boxShadow = `0px 0px 20px 0px ${colorMode.value}`;
    } else if (currentMode === 'rainbow') {
        this.style.backgroundColor = randomColor();
        this.style.boxShadow = `0px 0px 20px 0px ${randomColor()}`;
    } else if (currentMode === 'eraser') {
        this.style.backgroundColor = null;
        this.style.boxShadow = null;
    }
}

// RANDOMIZES RANGE BETWEEN 0 AND 255 AND IS USED AS ARGUEMENT FOR RANDOMCOLOR FUNCTION
const randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// RAINBOW MODE BRUSH
const randomColor = function () {
	return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
}