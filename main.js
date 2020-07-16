//DOM Elements
const time     = document.getElementById('time')    ;
const greeting = document.getElementById('greeting');
const name     = document.getElementById('name')    ;
const focus    = document.getElementById('focus')   ;

//Options Am and PM
const showAmPm = true;

//Show Time Function
function showTime() {
    let today = new Date()        ;
    let hour  = today.getHours()  ;
    let min   = today.getMinutes();
    let sec   = today.getSeconds();

    //set Am or Pm
   const amPm = hour >= 12 ? 'PM' : 'AM';

   //12 hour Format
   hour = hour % 12 || 12;

   //Output Time
   time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
       sec
       )} ${showAmPm ? amPm : ''}`;
   setTimeout(showTime, 1000);
}

//Add Zero infront of mins and seconds
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//set background and greeting
function setBgGreet() {
    let today = new Date();
    hour=today.getHours() ;

    if (hour < 12) {
//Morning
document.body.style.backgroundImage = "url('img/ogend.jpg')";
greeting.textContent='Good Morning';

    } else if(hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('img/middag.jpg')";
        greeting.textContent='Good Afternoon';
        
    } else {
        //Evening
        document.body.style.backgroundImage = "url('../img/aand.jpg')";
        greeting.textContent='Good Night';
        document.body.style.color = 'white';

    }
}
//Set Name
function setName(e) {
  if(e.type === 'keypress') {
      //Make sure enter is pressed
      if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
  }else{
      localStorage.setItem('name', e.target.innerText);
  }
}

//Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = 'Mackey';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}

    //Get Focus
function getFocus() {
    if(localStorage.getItem('focus ') === null) {
        focus.textContent = 'Click here to enter focus';
    }else{
        focus.textContent = localStorage.getItem('focus');
    } 
}

//Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        //Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('focus', e.target.innerText);
          focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



//run
showTime();
setBgGreet();
//setName();
getName();
getFocus();
