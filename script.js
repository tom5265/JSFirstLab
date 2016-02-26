
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
    };
    
        







