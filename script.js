let diapo1 = document.getElementById('diapositive_1');
let diapo2 = document.getElementById('diapositive_2');
let cornerBtn = document.getElementById('corner_btn');
let cornerBtnArrow = document.getElementById('corner_btn_arrow');

let clicked = false;
let angle = 0;
let transitionTime = .5;
cornerBtn.onclick = function(){
    if (clicked === false){
        diapo1.style = `transform: translateX(-125%); transition: ${transitionTime}s;`;
        diapo2.style = `transform: translateX(0%); transition: ${transitionTime}s;`;
        cornerBtnArrow.style = `transform: rotate(${angle}deg); transition: ${transitionTime}s;`;
        angle -= 180;
        clicked = true;
    }
    else{
        diapo1.style = `transform: translateX(0%); transition: ${transitionTime}s;`;
        diapo2.style = `transform: translateX(125%); transition: ${transitionTime}s;`;
        cornerBtnArrow.style = `transform: rotate(${angle}deg); transition: ${transitionTime}s;`;
        angle -= 180;
        clicked = false;
    }
}