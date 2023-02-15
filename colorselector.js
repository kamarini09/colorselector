"use strict";

window.addEventListener("DOMContentLoaded" , start);

function start(){
    console.log("START");
    addEventListeners();
}

function addEventListeners(){
    document.querySelector("input").addEventListener("input" , colorChange);

}

function colorChange(){
    console.log("HEX: " ,this.value);
    //console.log("RGB: ", hexToRGB(this.value));
    //console.log("HSL: ", RGBtoHSL(hexToRGB(this.value)));
    let rgb = hexToRGB(this.value);
    let hsl = RGBtoHSL(rgb)
    console.log(`RGB: , ${rgb.r}, ${rgb.g} , ${rgb.b}`);
    console.log(`HSL: , ${hsl.h} , ${hsl.s}% , ${hsl.l}%`);
}

//RGBtoHSL(0,0,0);


function RGBtoHSL(rgb){

    let r = rgb.r;
    let g = rgb.g;
    let b = rgb.b;

    r /= 255;
    g /= 255;
    b /= 255;

let h, s, l;

const min = Math.min(r,g,b);
const max = Math.max(r,g,b);

if( max === min ) {
  h = 0;
} else
if (max === r) {
  h = 60 * (0 + (g - b) / (max - min) );
} else
if (max === g) {
  h = 60 * (2 + (b - r) / (max - min) );
} else
if (max === b) {
  h = 60 * (4 + (r - g) / (max - min) );
}

if (h < 0) {h = h + 360; }

l = (min + max) / 2;

if (max === 0 || min === 1 ) {
  s = 0;
} else {
  s = (max - l) / ( Math.min(l,1-l));
}
// multiply s and l by 100 to get the value in percent, rather than [0,1]
s *= 100;
l *= 100;

//console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
//console.log(rgb);
//console.log(r,g,b);
//return (`${r} %,${g}%,${b}%`)
return {h: Math.floor(h) ,s: Math.floor(s),l: Math.floor(l)}


}



function hexToRGB(hexColor){
    const r = parseInt(hexColor.substring(1,3),16);
    const g = parseInt(hexColor.substring(3,5),16);
    const b = parseInt(hexColor.substring(5,7),16);
    //return (`${r},${g},${b}`);
    return {r,g,b};
    
}



