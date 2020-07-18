// Get the modal
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");
var m5 = document.getElementById("m5");
var m6 = document.getElementById("m6");

// Get the button that opens the modal
var btn1 = document.getElementById("b1");
var btn2 = document.getElementById("b2");
var btn3 = document.getElementById("b3");
var btn4 = document.getElementById("b4");
var btn5 = document.getElementById("b5");
var btn6 = document.getElementById("b6");


// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];


// When the user clicks on the button, open the modal
b1.onclick = function() {
    m1.style.display = "block";
} 

b2.onclick = function() {
    m2.style.display = "block";
}

b3.onclick = function() {
    m3.style.display = "block";
}

b4.onclick = function() {
    m4.style.display = "block";
}

b5.onclick = function() {
    m5.style.display = "block";
}

b6.onclick = function() {
    m6.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    m1.style.display = "none";
}

span2.onclick = function() {
    m2.style.display = "none";
}

span3.onclick = function() {
    m3.style.display = "none";
}

span4.onclick = function() {
    m4.style.display = "none";
}

span5.onclick = function() {
    m5.style.display = "none";
}

span6.onclick = function() {
    m6.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
    if (event.target == m1) { m1.style.display = "none"; }
    else if(event.target == m2) { m2.style.display = "none"; }
    else if(event.target == m3) { m3.style.display = "none"; }
    else if(event.target == m4) { m4.style.display = "none"; }
    else if(event.target == m5) { m5.style.display = "none"; }
    else if(event.target == m6) { m6.style.display = "none"; }
}