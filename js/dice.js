function dicegame() {
let randomnumber1 = (Math.random()*6)+1;
let randomnumber2 = (Math.random()*6)+1;


let player1 = parseInt(randomnumber1);
let player2 = parseInt(randomnumber2);
 

//console.log(player1);
//console.log(player2);
 

document.querySelector(".img1").src = `images/dice-${player1}` + ".png";
document.querySelector(".img2").src = `images/dice-${player2}` + ".png";

if(player1 > player2){
document.getElementById("result").innerHTML = "player 1 win";

}
else if(player2 > player1){
    document.getElementById("result").innerHTML = "player 2  win";
}
else{
    document.getElementById("result").innerHTML = "player draw"; 
}
var randomcolor=Math.floor(Math.random()*1677215).toString(16);
document.querySelector('#play1').style.background = '#' + randomcolor;

var randomnumber =Math.floor(Math.random()*16777215).toString(16);
document.querySelector('#play2').style.backgroundcolor = '#' + randomcolor;

const setBg = ()  => {
    const randomcolor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background="#" + randomcolor;
    VideoColorSpace.innerHTML = "#" + randomcolor;
  }
    genNew.addeventlistener("click", setBg);
    setBg();
}


















