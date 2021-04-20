/*=========================================
                Modal 1
=========================================== */
var modal1 = document.getElementById("mymodal1");
var btn1 = document.getElementById("selection");
var span = document.getElementsByClassName("c1")[0];

btn1.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

/*=========================================
                Modal 2
=========================================== */
var modal2 = document.getElementById("mymodal2");
var btn2 = document.getElementById("presentation");
var span = document.getElementsByClassName("c2")[0];

btn2.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function() {
  modal2.style.display = "none";
}

/*=========================================
                Modal 3
=========================================== */
var modal3 = document.getElementById("mymodal3");
var btn3 = document.getElementById("information");
var span = document.getElementsByClassName("c3")[0];

btn3.onclick = function() {
  modal3.style.display = "block";
}
span.onclick = function() {
  modal3.style.display = "none";
}


/*=========================================
                Modal 4
=========================================== */
var modal4 = document.getElementById("mymodal4");
var btn4 = document.getElementById("collaboration");
var span = document.getElementsByClassName("c4")[0];

btn4.onclick = function() {
  modal4.style.display = "block";
}
span.onclick = function() {
  modal4.style.display = "none";
}


/*=========================================
                Modal 5
=========================================== */
var modal5 = document.getElementById("mymodal5");
var btn5 = document.getElementById("donor");
var span = document.getElementsByClassName("c5")[0];

btn5.onclick = function() {
  modal5.style.display = "block";
}
span.onclick = function() {
  modal5.style.display = "none";
}

/*=========================================
                Modal 6
=========================================== */
var modal6 = document.getElementById("mymodal6");
var btn6 = document.getElementById("recipient");
var span = document.getElementsByClassName("c6")[0];

btn6.onclick = function() {
  modal6.style.display = "block";
}
span.onclick = function() {
  modal6.style.display = "none";
}
