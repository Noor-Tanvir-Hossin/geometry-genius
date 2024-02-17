function calculatingRectangleArea(){
    const rectangleWidth=document.getElementById('r-width')
    const width=parseFloat(rectangleWidth.value);

    const rectangleLength=document.getElementById('r-length')
    const length= parseFloat(rectangleLength.value);

    const rArea= width*length;

    const displayArea=document.getElementById('r-area')
    displayArea.innerText=rArea;
}