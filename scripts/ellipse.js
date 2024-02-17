
function calculateEllipseArea (){
    const mejor = getInputById('ellipse-major-radius');
    const minor = getInputById('ellipse-minor-radius');
     const area = 3.14 * mejor * minor;
     console.log(area);
     getElementById('ellipse-area', area);
}

function getInputById(inputId){
    const ellipseMejorInput = document.getElementById(inputId);
    const ellipseMejorValue = ellipseMejorInput.value;
    const value = parseFloat(ellipseMejorValue);
    return value;
}

function getElementById(elementById,area){
    const element = document.getElementById(elementById);
    element.innerText = area;
}