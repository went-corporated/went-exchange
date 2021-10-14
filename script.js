let diapo1 = document.getElementById('diapositive_1');
let diapo2 = document.getElementById('diapositive_2');
let cornerBtn = document.getElementById('corner_btn');
let cornerBtnArrow = document.getElementById('corner_btn_arrow');
let menubar = document.getElementById('menubar');
let menubarToggleBtn = document.getElementById('menubar_toggle_btn');

let clicked = false;
let angle = 0;
let transitionTime = .5;
cornerBtn.onclick = function(){
    if (clicked === false){
        diapo1.style = `transform: translateX(-125%); transition: ${transitionTime}s; opacity: 0;`;
        diapo2.style = `transform: translateX(0%); transition: ${transitionTime}s; opacity: 1;`;
        cornerBtnArrow.style = `transform: rotate(${angle}deg); transition: ${transitionTime}s;`;
        angle -= 180;
        clicked = true;
    }
    else{
        diapo1.style = `transform: translateX(0%); transition: ${transitionTime}s; opacity: 1;`;
        diapo2.style = `transform: translateX(125%); transition: ${transitionTime}s; opacity: 0;`;
        cornerBtnArrow.style = `transform: rotate(${angle}deg); transition: ${transitionTime}s;`;
        angle -= 180;
        clicked = false;
    }
}

let menubarToggleBtnClicked = false;
menubarToggleBtn.onclick = function(){
    if (menubarToggleBtnClicked === false){
        menubar.style = 'transform: translateX(0px); transition: .3s;';
        menubarToggleBtnClicked = true;
    } else {
        menubar.style = 'transform: translateX(-250px); transition: .3s;';
        menubarToggleBtnClicked = false;
    }
}