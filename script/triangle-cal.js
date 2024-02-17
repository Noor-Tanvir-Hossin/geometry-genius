/**
 * objective: get base, height of a triangle. Calculate the area by using the provided formula and then display the area.
 * step-1: 
 * 
 */
function calculatingTriangleArea(){
    // Triangle base
    const baseInput=document.getElementById('t-base')
    const baseText=baseInput.value;
    const base=parseFloat(baseText)

    // Triangle Length 
    const heightInput= document.getElementById('t-height')
    const height=parseFloat(heightInput.value);
    // const height=parseFloat(heightText);
    
    // Triangle area 
    const area=0.5*base*height;
    console.log(area);

    // display area
    const triangleArea=document.getElementById('t-area')
    triangleArea.innerText=area

    
}