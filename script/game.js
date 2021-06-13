function swapper(cell1,cell2){
    let temp=document.getElementById(cell1).className;
    document.getElementById(cell1).className=document.getElementById(cell2).className;
    document.getElementById(cell2).className=temp;
    let Temp=document.getElementById(cell1).style.backgroundColor;
    document.getElementById(cell1).style.backgroundColor=document.getElementById(cell2).style.backgroundColor;
    document.getElementById(cell2).style.backgroundColor=Temp;
    moveNo++;
}
function Clicker(i,j){
    if(gamesNo==0)
      return;
    if(moveNo==0)
      start();
    let cell=document.getElementById("Cell"+i+j);
    let tile=cell.className;
    if(tile!="Tile24"){
        if (j<4) {
            if ( document.getElementById("Cell"+i+(j+1)).className=="Tile24") {
              swapper("Cell"+i+j,"Cell"+i+(j+1));
            }
          }
          if (j>0) {
            if ( document.getElementById("Cell"+i+(j-1)).className=="Tile24") {
              swapper("Cell"+i+j,"Cell"+i+(j-1));
            }
          }
          if (i>0) {
            if ( document.getElementById("Cell"+(i-1)+j).className=="Tile24") {
              swapper("Cell"+i+j,"Cell"+(i-1)+j);
            }
          }
          if (i<4) {
            if ( document.getElementById("Cell"+(i+1)+j).className=="Tile24") {
              swapper("Cell"+i+j,"Cell"+(i+1)+j);
            }
          } 
    }
    mover();
    setTimeout(checker,250);

}