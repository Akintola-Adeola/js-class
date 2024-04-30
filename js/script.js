




// document.querySelector("p").innerHTML="welcome to class";

// document.querySelectorAll("p")[0].innerHTML ="welcome to class 1";
// document.querySelectorAll("p")[1].innerHTML ="welcome to class 2";

// document.querySelector(".result").innerHTML ="2 + 2 = 4" ;

 function sum() {
    let num1 = document.querySelector("#num1").value;//45
    let num2 = document.querySelector("#num2").value;//30
    let total =  +num1 + +num2;

    //console.log(total);

    document.querySelector("#result").innerHTML = total;

 }
function sub() {
      let num1 = document.getElementById("#num1").value;
      let num2 = document.getElementById("#num2").value;

      let total = num1 - num2;

      document.querySelector("#result").innerHTML=
}