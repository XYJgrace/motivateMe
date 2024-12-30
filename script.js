//this is single line comment in JavaScript
/*this is a 
multi-line
comment in JavaScript*/

/*track the number of times the button was clicked*/
var clickCount = 0;

/*This variable is the HTML Button Element with the ID "motivateButton"*/
var motivateButton = document.getElementById("motivateButton");

motivateButton.addEventListener ("click", sendMotivation);

function sendMotivation() {
  clickCount += 1;

  if (clickCount == 1) {
    sendMotivation1();
  }

  if (clickCount == 2) {
    sendMotivation2();
  }

  if (clickCount == 3) {
    sendMotivation3();
    resetClickCount();
  }
}

//send motivation when button is clicked once
function sendMotivation1(){
  alert("Give yourself chances. You got this.");
}

function sendMotivation2(){
  alert("You are valid. Don't give up.");
}

function sendMotivation3(){
  alert("Go get some sunlight! You deserve a nice break.");
}

function resetClickCount(){
  clickCount = 0;
}

