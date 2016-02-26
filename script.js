
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
    newDiv.onmouseleave = removeHeader;  
    newDiv.onclick = getRandomColor;
    
    
    function addHeader (e) {
      var hoveredElement = e.target;
      hoveredElement.innerHTML = newDiv.id;
}    
   function removeHeader (e) {
    var hoveredElement = e.target;
    hoveredElement.innerHTML = '';
}  

}

function getRandomColor(e) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.backgroundColor = color;
}



   
    
 
        







