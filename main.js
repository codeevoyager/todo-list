var mytodoList = document.getElementsByTagName("LI");
var i;
for (i=0; i < mytodoList.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    mytodoList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i=0; i < close.length; i++){
    close[i].onclick = function(){ 
        this.parentElement.style.display="none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('finished');
  }
}, false);

function addList(){
    var input = document.getElementById("myInput").value;
    var li = document.createElement("li");
    var t = document.createTextNode(input);
    li.appendChild(t);

    if((input.length == 0)||(input.indexOf(" ")==0)){
        alert("Please write something");
    }else{
        document.getElementById("todoList").appendChild(li);
    }

    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");
    var i;
    for (i=0; i < close.length; i++){
    close[i].onclick = function(){ 
        this.parentElement.style.display="none";
    }
    }
}