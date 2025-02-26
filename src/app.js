import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = excuseGen();
};

let issue = ['Quiero ', 'No puedo ', 'Me es dificil ', 'Complicado '];
let action = ['trabajar', 'ser productivo', 'estudiar', 'rendir'];
let what = [' pero es demasiado pronto', ' con el buen día que hace', ', siendo hoy...'];
let when = [' ¡No digas nada y yo no diré nada!', ' ¡Fiesta pal body!', ', el mundo no quiere', ' ¿de verdad hay que hacerlo?', ', si eso ya lo hago mañana.'];

function excuseGen(){
    let excuse;
    let issueNum=Math.floor(Math.random() * 4);
    let actionNum=Math.floor(Math.random() * 4);
    let whatNum=Math.floor(Math.random() * 3);
    let whenNum=Math.floor(Math.random() * 5);



    excuse= issue[issueNum] + action[actionNum] + what[whatNum] + when[whenNum];


    console.log(issueNum);
    console.log(actionNum);
    console.log(whatNum);
    console.log(whenNum);
    console.log(excuse);
    return excuse;
   


}