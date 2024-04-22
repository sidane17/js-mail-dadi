// let d=document.getElementById("dadi");
// d=console.log("22");

//   d.onclick= getRandomInt(1,7);
let cpu=0;
let g=0;
document.getElementById("dadi").onclick=function getRandomInt() {
    let d=document.getElementById("giocatore1");
    let c=document.getElementById("cpu");
    console.log(d.innerHTML);
    
    g= Math.floor(Math.random() * (6 - 1) + 1);
    cpu= Math.floor(Math.random() * (6 - 1) + 1);
   d.innerHTML=g;
   c.innerHTML=cpu;
    console.log(g);
    if(g>cpu){
        document.getElementById("vincitore").innerHTML=`Giocatore1`;
    }else{
        document.getElementById("vincitore").innerHTML=`cpu`;
    }
    if(g==cpu){
        document.getElementById("vincitore").innerHTML=`Pareggio;)`;
    }
   }