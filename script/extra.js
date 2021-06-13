let kkk,l,counter,moveNo=0;
let real=[0,0,0];
let myTimer;
let fake=["","",""];
function score(){
    let points=(((real[0]*60*60)+(real[1]*60)+(real[2]))*0.75)+(moveNo*0.25)
    return points;
}
function checker(){
  counter=0;
  for(kkk=1;kkk<=3;kkk++)
      for(l=1;l<=3;l++){
          let kk=kkk-1;
          let ll=l-1;
          if(document.getElementById("cell"+kk+ll).style.backgroundColor==document.getElementById("Cell"+kkk+l).style.backgroundColor)
              counter++;
      }
      if(counter==9){
          scr=score();
          alert("You won\nYou have scored "+scr+" points\nNote: The lower the score, the better you have played");
          setColour();
          moveNo=0;
          mover();
          reset();
      }
}

function mover(){
  document.getElementById("noOfMoves").innerHTML="No. of moves made: "+moveNo;
}

function start() {
    myTimer = setInterval(function(){
        real[2]+= 1;
        if(real[2]==60){
            real[1]++;
            real[2]-=60;
        }
        if(real[1]==60){
            real[0]++;
            real[1]-=60;
        }
        for(let h=0;h<3;h++){
            if((real[h]/10)<1){
                fake[h]="0"+real[h];
            }
            else{
                fake[h]=real[h];
            }
        }
         document.getElementById("time").innerText = "Time Elapsed: "+fake[0]+":"+fake[1]+":"+fake[2];
    }, 1000) ;

}
function reset() {
    real=[0,0,0];
    document.getElementById("time").innerText = "Time Elapsed: 00:00:00";
    clearInterval(myTimer);
 }