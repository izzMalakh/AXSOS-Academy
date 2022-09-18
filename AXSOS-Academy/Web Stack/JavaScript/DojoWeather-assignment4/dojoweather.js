function showalert(){
    alert("Loading weather report");
}

var element=document.querySelector(".alert-box")
function dismiss(){
    element.remove();
}
var element1=document.querySelector("#degree1")


function changetemp(){
    if(selecttemp.value==="f"){ 
    element1.innerText="75F°"
    document.getElementById("degree2").innerText="65F°"
    document.getElementById("degree3").innerText="80F°"
    document.getElementById("degree4").innerText="66F°"
    document.getElementById("degree5").innerText="69F°"
    document.getElementById("degree6").innerText="61F°"
    document.getElementById("degree7").innerText="78F°"
    document.getElementById("degree8").innerText="70F°"
}
else if(selecttemp.value==="c"){
    element1.innerText="24C°"
    (document.getElementById("degree2").innerText)*10
    document.getElementById("degree3").innerText="27C°"
    document.getElementById("degree4").innerText="18C°"
    document.getElementById("degree5").innerText="21C°"
    document.getElementById("degree6").innerText="16C°"
    document.getElementById("degree7").innerText="26C°"
    document.getElementById("degree8").innerText="21C°"

}
   
}


