document.getElementById("telephoneCallHandler").addEventListener("mouseover",colorChange);

function colorChange(){
    document.getElementById("telephoneCallHandler").style.transitionDuration = '1s';
    document.getElementById("telephoneCallHandler").style.backgroundColor= '#7CFC00';
    document.getElementById("telephoneCallHandler").style.color='black';
    document.getElementById("telephoneCallHandler").style.width = '18vw';
    document.getElementById("telephoneCallHandler").style.height = '12vh';
}


document.getElementById("telephoneCallHandler").addEventListener("mouseout",colorChangeRevert);

function colorChangeRevert(){
    document.getElementById("telephoneCallHandler").style.transitionDuration = '1s';
    document.getElementById("telephoneCallHandler").style.backgroundColor= 'red';
    document.getElementById("telephoneCallHandler").style.color= 'white';
    document.getElementById("telephoneCallHandler").style.width = '13.8vw';
    document.getElementById("telephoneCallHandler").style.height = '10.1vh';
}
// ^^ Controls the button for color changes and sizing. Only below will write script for onclick
// to handle a phonecall offer. Altenative of  Skype, Teams or Discord.

document.getElementById("telephoneCallHandler").addEventListener("click",callHandler);

function callHandler(){
    document.getElementById("telephoneCallHandler").style.backgroundColor='purple';
    document.getElementById("telephoneCallHandler").style.color='white';
    document.getElementById("telephoneCallHandler").innerHTML="Calling";

}