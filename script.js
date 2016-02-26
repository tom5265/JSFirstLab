
document.addEventListener("DOMContentLoaded", function createButton() {
    var btn = document.createElement('button');
    var text = document.createTextNode('Make Boxes!');       
    btn.appendChild(text);                             
    document.body.appendChild(btn);
    btn.className = 'button'; 
    btn.onclick = addDiv; 
   
   
}); 
  
var divAmount = 1;

       function addDiv() { 
            
            var newDiv = document.createElement('div');
            newDiv.className = 'blackBox';
            document.body.appendChild(newDiv); 
            newDiv.id = divAmount++;
            newDiv.onmouseenter = addHeader;
            
            function addHeader () {
                var boxId = document.createElement('h2');
                var boxText = document.createTextNode(newDiv.id);
                boxId.appendChild(boxText);
                newDiv.appendChild(boxId);
            }
    };
    
   
    
 
        







