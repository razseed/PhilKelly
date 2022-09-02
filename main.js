document.getElementById("telephoneCallHandler").addEventListener("mouseover",colorChange);

function colorChange(){
    document.getElementById("telephoneCallHandler").style.backgroundColor= '#7CFC00';
    document.getElementById("telephoneCallHandler").style.color='black';
}

document.getElementById("telephoneCallHandler").addEventListener("mouseout",colorChangeRevert);

function colorChangeRevert(){
    document.getElementById("telephoneCallHandler").style.backgroundColor= 'red';
    document.getElementById("telephoneCallHandler").style.color= 'white';
}
// ^^ Controls the button for color changes only below will write script for onclick
// to handle a phonecall offer. Altenative of  Skype, Teams or Discord.