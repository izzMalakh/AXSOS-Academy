var counter=0;
var counter1=0;
var counter2=0;
var elementcount = document.querySelector("#like-num");
function addlike(){
    counter++;
    elementcount.innerText = counter +  "-Like(s)";

}
var elementcount2 = document.querySelector("#like-num2");
function addlike1(){
    counter1++;
    elementcount2.innerText = counter1 +  "-Like(s)";

}

var elementcount3 = document.querySelector("#like-num3");
function addlike2(){
    counter2++;
    elementcount3.innerText = counter2 +  "-Like(s)";

}
