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
//    email---------------------------------------------------------

let a=["khalilsidane@gmail.com","topogigio@gmail.com","boolean@gmail.com"];
let c=0;

document.getElementById("submit").onclick=function(){
    for(let i=0;i<a.length;i++){
        console.log("pazzo")
        let b=document.getElementById("e").value;
        if(b==a[i]){
            
         c++;
        }else{
            c=0;
        }
      
    }
    if(c==1){
        console.log("presente");
        document.getElementById("span").innerHTML="OK"
    }else{
        console.log("non presente");
        document.getElementById("span").innerHTML="Email non presente"
    }
    
}