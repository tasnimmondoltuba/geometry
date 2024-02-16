// ractangle calculate
function ractiangleCalculateArea(){
    // console.log('memememe')
    // width calculate
const ractangleWidthInput = document.getElementById('ractangle-width');
const ractangleValue = ractangleWidthInput.value;
const width = parseFloat(ractangleValue);
console.log(width);

// height calculate
const ractangleHeightInput = document.getElementById('ractangle-height');
const ractangleHeightValue = ractangleHeightInput.value;
const height = parseFloat(ractangleHeightValue);
console.log(height);

// area calculate
const area = width * height;
console.log(area);

// span area calculate
 const areaSpan = document.getElementById('ractangle-area');
 areaSpan.innerText = area;


}