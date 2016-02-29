
document.addEventListener("DOMContentLoaded", function createButton() {
    var btn = document.createElement('button');
    var btnContainer = document.createElement('div');
    btnContainer.id = 'btn-container';
    var text = document.createTextNode('Make Boxes!');

    var boxContainer = document.createElement('div');
    boxContainer.id = 'box-container';

    btn.className = 'button';
    btn.onclick = addDiv;
    btn.appendChild(text);
    btnContainer.appendChild(btn);
    document.body.appendChild(btnContainer);
    document.body.appendChild(boxContainer);
});

function addDiv() {
    var newDiv = document.createElement('div');
    var divAmount = document.getElementsByClassName('blackBox').length;
    newDiv.className = 'blackBox';

    var boxContainer = document.getElementById('box-container');

    boxContainer.appendChild(newDiv);
    newDiv.id = String(divAmount);
    newDiv.onmouseover = addHeader;
    newDiv.onmouseleave = removeHeader;
    newDiv.onclick = getRandomColor;
    newDiv.ondblclick = deleteSibling;

    function addHeader(e) {
        var hoveredElement = e.target;
        hoveredElement.innerHTML = newDiv.id;
    }
    function removeHeader(e) {
        var hoveredElement = e.target;
        hoveredElement.innerHTML = '';
    }
};

function getRandomColor(e) {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    e.target.style.backgroundColor = color;
};

function deleteSibling(e) {
    var element = e.target;


    var divId = parseInt(element.id, 10);
    if (divId % 2 === 0) {
        if (element.previousElementSibling) {
            element.previousElementSibling.remove();
            return;
        }
    } else {
        if (element.nextElementSibling) {
            element.nextElementSibling.remove();
            return;
        }
    }
    alert('The sibling does not exist!');
}

   
    
 
        







