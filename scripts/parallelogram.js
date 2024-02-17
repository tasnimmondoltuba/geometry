// function calculateParalleogramArea(){
//     // base calculate
//     const paralleogramBaseInput = document.getElementById('parallelogram-base');
//     const parallelogramBaseValue = paralleogramBaseInput.value;
//     const base = parseFloat(parallelogramBaseValue);
//     console.log(base);

//     // height calculate

//     const parallelogramHeightInput = document.getElementById('parallelogram-height');
//     const parallelogramHeightValue = parallelogramHeightInput.value;
//     const height = parseFloat(parallelogramHeightValue);
//     console.log(height);

//     // area
//      const area = base * height;
//      console.log(area);

//     //  span area
//       const spanArea = document.getElementById('span-area');
//       area.innerText = spanArea;
// }


// option - 2

// function  calculateParalleogramArea (){
//   const base = getParallelogramBase();
//   console.log(base);

// }
// function getParallelogramBase(){
//   const baseInput = document.getElementById('parallelogram-base');
//   const baseText = baseInput.value;
//   const base = parseFloat(baseText);
//   return base;
// }


function calculateParalleogramArea(){
    const base = getInputValueById('parallelogram-base');
    // console.log('base value :',base);
    const height = getInputValueById('parallelogram-height');
    // console.log("height value :",height);
    const area = base * height;
    console.log('area value :', area);
    setInnerTextById('span-arae', area);
}
function getInputValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
 return inputValue;
}
function setInnerTextById(elementId, area){
  const element = document.getElementById(elementId);
  element.innerText= area;
}