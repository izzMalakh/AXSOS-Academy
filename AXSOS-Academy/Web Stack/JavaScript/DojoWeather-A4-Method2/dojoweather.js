function showalert() {
  alert("Loading weather report");
}

var element0 = document.querySelector(".alert-box")
function dismiss() {
  element0.remove();
}


//method1:: 

var hightempelements = document.querySelectorAll(".highTemp")
var lowtempelements = document.querySelectorAll(".lowTemp")
var temp = document.getElementById("selecttemp")
var ele = document.querySelectorAll(".symbolc")
var ele2 = document.querySelectorAll(".symbolc2")
function changetemp(element) {
  console.log(element.value);
  console.log(hightempelements);
  console.log(lowtempelements);
  console.log(temp.value);

  if (temp.value === "f") {
    for (i = 0; i < hightempelements.length; i++) {
      hightempelements[i].innerText = Math.round(hightempelements[i].innerText * 9 / 5 + 32);
      lowtempelements[i].innerText = Math.round(lowtempelements[i].innerText * 9 / 5 + 32);
      ele[i].innerText = "F°";
      ele2[i].innerText = "F°";
    }


  }
  else if (temp.value === "c") {
    for (i = 0; i < hightempelements.length; i++) {

      hightempelements[i].innerText = Math.round((hightempelements[i].innerText - 32) * 5 / 9);
      lowtempelements[i].innerText = Math.round((lowtempelements[i].innerText - 32) * 5 / 9);
      ele[i].innerText = "C°";
      ele2[i].innerText = "C°";
    }
  }

  //helper functions that we can use :: 
  // const celsiusToFahr = (celsius) => {
  //   const cToF = celsius * 9 / 5 + 32;
  //   return Math.round(cToF);
  // }

  // const fahrToCels = (fahrenheit) => {
  //   const fToC = (fahrenheit -32) * 5 / 9;
  //   return Math.round(fToC);
  // }










}

