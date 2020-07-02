var bh = document.getElementById('button_house');
var ann = document.getElementById('addNewNote');

ann.addEventListener('click', function(){
    if (bh.style.display == ''){
        bh.style.display = 'block';
        ann.value = 'close X';
    } else if(bh.style.display =='block'){
        bh.style.display = '';
        ann.value = '+ Add New Note';
    }
})
//endof creating new section

//adding nodes to DOM and localStorage
var nt = document.getElementById('newToDo');
var at = document.getElementById('addToDo');
var ol = document.getElementById('toDoList');

at.addEventListener('click', addToDom);
at.addEventListener('click', addToLocalStorage);

function addToDom(){
    if(nt.value != ''){
        ol.innerHTML += '<li><input value';' + nt.value + ';
    }
}