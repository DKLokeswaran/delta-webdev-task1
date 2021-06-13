let i,j,k,count,temp,gamesNo=0;
let colour=["#ff0000","#00ff00","#0000ff","#ffff00","#8f00db","#ff9100"];
let colourCount=[0,0,0,0,0,0];
let array =[[0,0,0],[0,0,0],[0,0,0]];
function isCount(){
    count=0;
    for(i=0;i<3;i++)
        for(j=0;j<3;j++){
            count+=array[i][j];
        }
    return count;
}
function deColour(){
    for(i=0;i<3;i++)
        for(j=0;j<3;j++){
            document.getElementById("cell"+i+j).style.backgroundColor="#ffffff";
        }
}
function setColour(){
    deColour();
    gamesNo++;
    array =[[0,0,0],[0,0,0],[0,0,0]];
    colourCount=[0,0,0,0,0,0];
    do{
        for(i=0;i<3;i++)
            for(j=0;j<3;j++){    
                let rnd=Math.floor(Math.random()*6);
                if((array[i][j]==0)&&(colourCount[rnd]<4)){
                    document.getElementById("cell"+i+j).style.backgroundColor=colour[rnd];
                    array[i][j]++;
                    colourCount[rnd]++;
            }
        }
        temp=isCount();
    }while(temp<9);
    SetColour();
}