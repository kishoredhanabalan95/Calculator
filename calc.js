document.addEventListener("DOMContentloaded", function() {
    const screeeDisplay=document.getElementById('screen');
    const spans=document.querySelectorAll('buttons span');
    const spanArray=Array.from(span);
    document.querySelectorAll('.operator')[1].innerText='/';
    document.querySelectorAll('.operator')[2].innerText='*';

    spanArray.map(button=>button.addEventListener('click',
    function() {
        if(button.innerText !=="="){
            screeeDisplay.innerHTML += button.innerText
        };
        if(button.innerText==="="){
            screenDisplay.innerText = eval
            (screenDisplay.innerText)
        };
        if (button.innerText==="C"){
            screenDisplay.innerText=""
        };
    }));
});