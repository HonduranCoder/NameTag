const buttonEl = document.getElementById("Name-Button");
const headerEl = document.getElementById("header"); 
/*const clicksEl = document.getElementById("clickNumber");*/

buttonEl.addEventListener('click', ()=> {
    const inputEl = document.getElementById("input"); 
    console.log(inputEl.value);

    headerEl.textContent = inputEl.value;
    inputEl.value=""
});

/*let clicks = 0; 
function onClick(){
    clicks += 1; 
    document.getElementById("clickNumber").innerHTML = clicks;
};*/

/*
HTML: onclick= "empty()" value = reset.

function reset(){
    document.getElementById("input").empty();
}*/