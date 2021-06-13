let I,J,K,Count,Temp;
let Colour=["#ff0000","#00ff00","#0000ff","#ffff00","#8f00db","#ff9100"];
let ColourCount=[0,0,0,0,0,0];
let Array1 =[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let Loop2=new Array;
let cls;
function IsCount(){
    Count=0;
    for(I=0;I<5;I++)
        for(J=0;J<5;J++){
            Count+=Array1[I][J];
        }
    return Count;
}

function DeColour(){
    for(I=0;I<5;I++)
        for(J=0;J<5;J++){
            document.getElementById("Cell"+I+J).style.backgroundColor="#ffffff";
        }
}
function SetColour(){
    DeColour();
    Array1 =[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    ColourCount=[0,0,0,0,0,0];
    do{
        for(K=0;K<6;K++)
            if(ColourCount[K]!=4)
                Loop2.push(K);
        for(I=0;I<5;I++)
            for(J=0;J<5;J++){ 
                let num=(5*I)+J;  
                cls=document.getElementsByClassName("Tile"+num); 
                let Rnd=Math.floor(Math.random()*Loop2.length);
                if((I==4)&&(J==4))
                    cls[0].style.backgroundColor="#ffffff";
                else if((Array1[I][J]==0)&&(ColourCount[Loop2[Rnd]]<4)){
                    cls[0].style.backgroundColor=Colour[Loop2[Rnd]];
                    Array1[I][J]++;
                    ColourCount[Loop2[Rnd]]++;
                }
            }
        Temp=IsCount();
        Loop2.splice(0,Loop2.length);
        }while(Temp<24);
        moveNo=0;
        reset();
        mover();
    }