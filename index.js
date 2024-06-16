var clear = document.querySelector(".clear");
var display = document.querySelector("input");

clear.addEventListener("click",function(){
    display.value = "";
});

function appendTODisplay(input){
    display.value += input;
    display.style.color = "skyblue";
    document.querySelector(".operator").style.color = "orange";
}

function solve(){
    try{
        display.value = eval(display.value);
        display.style.color = "orange";
    }catch{
        display.value = "Invalid";
        display.style.color = "red";
    }
}