function calculatePantagonArea(){
    const pera = inputValueById('pentagon-pera');
    console.log(pera);
    const apo = inputValueById('pentagon-apo');
    console.log(apo);
    const area = 0.5 * pera * apo;
    console.log(area);
    elementById('pentagon-area', area);
  

}

function inputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
    
}
function elementById(elementId, area){
    const elemetsValue = document.getElementById(elementId);
    elemetsValue.innerText = area;
}