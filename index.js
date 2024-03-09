let contacts=[  {   name:'Ankit (You)',
title:'message yourself',
dp:'dps/Screenshot 2023-10-21 164615.png'},
{   name:'IT Placement 2025',
title:'click for more info',
dp:'dps/Screenshot 2023-08-03 151421.png'},
{   name:'IT &nbsp; B &nbsp;2021-2025',
title:'click for more info',
dp:'dps/Screenshot 2023-08-03 151605.png'},
{   name:'Bhai&#10084;&#65039;',
title:'',
dp:'dps/Screenshot 2023-10-21 155523.png'},
{   name:'Talk about scholarship',
title:'click for more info',
dp:'dps/Screenshot 2023-08-03 151516.png'},
{   name:'Group ka naam',
title:'chunni bhai,Lakshman,you',
dp:'dps/Screenshot 2023-08-11 010241.png'},
{   name:'vijju',
title:'',
dp:'dps/Screenshot 2023-08-04 120434.png'},
 {   name:'shivam bhaiya',
title:'',
dp:'dps/Screenshot 2023-08-04 122501.png'},
{   name:'Lakshman',
title:'',
dp:'dps/Screenshot 2023-08-03 152711.png'},
{   name:'Ayush cs',
title:'',
dp:'dps/Screenshot 2023-08-03 151421.png'},
{   name:'&#128293;SYSTEM&#128293;',
title:'click for more info',
dp:'dps/Screenshot 2023-08-03 152215.png'},



];


let chats=[
  {m1:"Rice 2kg", 
  me2:"Lunch box",
  me3:"Wheat",
  me3:"kaccha towel",
  me3:"bgmi",
  me3:"Red yellow",
  me3:"9283842340",
  me3:"going",
  me3:"trouser",
    },
  
];

// let me= document.getElementById("c1");

// me.addEventListener("onclick",e);

// function e()
// {
//         let common=document.createElement("div");
//         let itemm=document.createElement("div");
//         let msgg=document.createElement("p");
//         let timee=document.createElement("span");
//         bigField.classList.add('commmon');
//         msgg.classList.add('item');
//         timee.classList.add('time2');

// };


let previousClickedId = null;

function handleDivClick(clickedId) {
    console.log(clickedId);
    
    const id = clickedId.replace('c', '');

    const previouschat = document.getElementById(previousClickedId);
    const sourceDiv = document.getElementById(clickedId);

    const chatname = document.querySelector('#CHAT-CONTENT-NAME');
    const chatdiscription = document.querySelector('#CHAT-CONTENT-NAME-ABOUT');
    const targetImage = document.querySelector('#right-chat-dp');

    targetImage.src = contacts[id - 1].dp;
    chatname.innerHTML = contacts[id - 1].name;
    chatdiscription.innerHTML = contacts[id - 1].title;

    if (previousClickedId !== null) {
        previouschat.classList.remove('clicked');
    }

    sourceDiv.classList.add('clicked');

    previousClickedId = clickedId;
}

let source=document.querySelector('#main-dp');

let leftArrow=document.querySelector('#left-arrow');

let bigDp=document.querySelector('#big-dp');

let accdp=document.querySelector('#ACCOUNT-DP');

let arrProfile=document.querySelector('#arrowProfile');

let All= document.querySelector('#all');

source.addEventListener("click", myFunction);

function myFunction() {
  accdp.style.transform = "translateX(0%)";
  bigDp.style.transform='scale(1)';
  bigDp.style.transition = ' 200ms ease-out 300ms';
  accdp.style.transition = ' cubic-bezier(.52,.56,.69,.98) 300ms';
  arrProfile.style.transition = ' 200ms ease-out 300ms';
  arrProfile.style.transform="translateX(0%)";
  arrProfile.style.opacity="1";
  All.style.opacity="1";
  All.style.transition= ' 500ms ease-out 300ms';
  All.style.transform="translateX(0%)";
}

leftArrow.addEventListener('click',back);

function back(){
        arrProfile.style.transition = ' ease-out 600ms';
        arrProfile.style.opacity="0";
        arrProfile.style.transform="translateX(-60%)";
        accdp.style.transform = "translateX(-100%)";
        bigDp.style.transform='scale(0)';
        bigDp.style.transition = ' ease-out 500ms';
        accdp.style.transition = ' ease-out 200ms';
        All.style.opacity="0";
        All.style.transition= ' ease-out 500ms';
        All.style.transform="translateY(-30%)";


}



const clickableDiv = document.getElementById('clickableDiv');
const menu = document.getElementById('menu');
let clickCount = 0;

clickableDiv.addEventListener('click', (event) => {
  clickCount++;

  if (clickCount === 1 || clickCount % 2 === 0) {
    menu.style.display = 'block';
  
  }
  
  else {
   
    menu.style.display = 'none';
    
  }

  
});


// Hide the menu when clicking outside of it
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && event.target !== clickableDiv) {
    menu.style.display = 'none';
    
  }
});


const VIEEW=document.querySelector('#VIEW');
const photo=document.querySelector('#view-photo');
const vImage=document.querySelector('.photo-section-image');
const pSection=document.querySelector('.photo-section');


VIEEW.addEventListener('click', (event) => {
  photo.style.transition = '  ease-in-out 300ms';
  // All.style.transform="translateY(-30%)";
 
  photo.style.zIndex='3';
  
  
});

photo.addEventListener('click', (event) => {
  
  
  // pSection.style.transform="translateY(-10%)";
  // pSection.style.transform="translateX(-70%)";
  // vImage.style.transform="translatey(-30%)";
  photo.style.transition = '  ease-in-out 300ms';
  // vImage.style.transition = 'cubic-bezier(.41,.07,.7,.7) 1s';
  // pSection.style.transition = 'cubic-bezier(.41,.07,.7,.7) 700ms';
  photo.style.zIndex='-3';
  
});












