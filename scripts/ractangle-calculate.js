// ractangle calculate
function ractiangleCalculateArea(){
    // console.log('memememe')
    // width calculate
const ractangleWidthInput = document.getElementById('ractangle-width');
const ractangleValue = ractangleWidthInput.value;
const width = parseFloat(ractangleValue);
console.log(width);

// length calculate
const ractangleLengthtInput = document.getElementById('ractangle-length');
const ractangleLengthtValue = ractangleLengthtInput.value;
const length = parseFloat(ractangleLengthtValue);
console.log(length);

// area calculate
const area = width * length;
console.log(area);

// span area calculate
 const areaSpan = document.getElementById('ractangle-area');
 areaSpan.innerText = area;


}