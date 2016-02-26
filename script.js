
document.addEventListener("DOMContentLoaded", function createButton() {
    var btn = document.createElement('button');
    var text = document.createTextNode('Make Boxes!');       
    btn.appendChild(text);                             
    document.body.appendChild(btn);
    btn.className = 'button'; 
    btn.onclick = addDiv; 
   
   
}); 
  

function addDiv() { 
    var newDiv = document.createElement('div');
    var divAmount = document.getElementsByClassName('blackBox').length;       
    newDiv.className = 'blackBox';
    document.body.appendChild(newDiv); 
    newDiv.id = String(divAmount);
    newDiv.onmouseover = addHeader;    
    
    
    function addHeader (e) {
    var hoveredElement = e.target;
    hoveredElement.innerHTML = newDiv.id;
}    
}


   
    
 
        







