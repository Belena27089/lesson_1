window.onload = function(){

var doc = document;

var div = doc.createElement('div');
doc.body.appendChild(div);
div.className = 'container';
var tab = doc.createElement('table');
   

var nam = ['',1, 2, 3, 4, 5, 6, 7, 8,''];
var abc = ['','A','B','C','D','E','F','G','H',''];
var figura = ['','♜','♞','♝', '♚', '♛', '♝','♞','♜',''];
abc = abc.reverse();  
            

for (var j = 0;j < 10;j++) {

    var newRow=tab.insertRow(j); 

        for (var i = 0;i < 10; i++) {

        var newCell = newRow.insertCell(i);  
          newCell.style.width="50px";
          newCell.style.backgroundColor="#C1CDC1";



          if(j != 9 && (j % 2) != 0 && i != 0 && (i % 2) == 0 || j !=0 && (j % 2) == 0 && (i % 2) != 0 && i != 9 ){

          newCell.style.backgroundColor="gray";

          }
          
          if(i == 0 || i == 9){

            

            newCell.innerHTML = nam[j];
            newCell.style.width="15px";
            newCell.style.textAlign="center";
            newCell.style.backgroundColor="white";
          } 
          if(j == 0 || j == 9){
           
           newCell.innerHTML  = abc[i];
           newCell.style.textAlign="center";
           newCell.style.height="35px";
           newCell.style.backgroundColor="white";
          }
          // if(j == 0){
          // newCell.style.transform="rotate(180deg)"; 
          // }

          if(j == 1 && i != 0 && i != 9 || j == 8 && i != 0 && i != 9 ){
            newCell.innerHTML  = figura[i];
            newCell.style.textAlign="center";
            newCell.style.color="white";
            newCell.style.fontSize="40px";
            newCell.style.height="90px";
          }
          if (j == 8){
            newCell.style.color="black";
          }
          
          var peshcks = [];
          for(var k = 0;k < 9;k++){
              var peshcka = '♟';
              peshcks.push(peshcka);
          }
              
            
          if(j == 2 && i != 0 && i != 9 || j == 7 && i != 0 && i != 9 ){    
              newCell.innerHTML  = peshcks[i];
              newCell.style.textAlign="center";
              newCell.style.color="white";
              newCell.style.fontSize="35px";
              newCell.style.height="90px";
          }
          if (j == 7){
              newCell.style.color="black";
          }
          
        }
} 
 
     
div.appendChild(tab);
tab.style.width = '800px';
tab.style.height = '800px';   
tab.style.border = '2px solid';
tab.style.margin = '32px';
tab.style.borderCollapse ='collapse';
return newCell;
}