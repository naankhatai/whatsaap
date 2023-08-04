
let el_up = document.getElementsByClassName("general-chat");
let el_down = document.getElementsByClassName("general-chat");
// let str = "Click on button to change the background color";
         
// el_up.innerHTML = str;
         
function changeColor(color) {
    document.body.style.background = color;
}
 
function gfg_Run() {
    changeColor('yellow');
    el_down.innerHTML = "Background Color changed";
}    