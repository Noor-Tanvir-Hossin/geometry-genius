function calculatingParallelogramArea(){
    const base=getParallelogramInput('p-base')
    const height=getParallelogramInput('p-height')
    const area= base*height
    setOutput('p-area',area)

}

function getParallelogramInput(inputId){
    const getInput=document.getElementById('inputId')
    const input=parseFloat(getInput.value)
    return input
}
function setOutput(element,area){
    const element=document.getElementById('element')
    element.innertext=area

}
