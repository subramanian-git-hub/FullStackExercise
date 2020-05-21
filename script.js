//alert("Hello! its javascript");
var count = 1;
var rowCount;
function redirectClickEvent(){
    if(document.getElementById("button_add_update").innerHTML == "Add User"){
        addTableData();
    } else{
        updateTableFunction();
    }
}

function addTableData() {
    var colorClassTerm = "ColorBg";
    var table = document.getElementById("loggerTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById("userName").value;
    cell2.innerHTML = document.getElementById("userAge").value;
    if(document.getElementById("maleSelection").checked){
        var currentSelection = male_label.style.color;
        row.classList.add("maleColorClass");
        cell3.innerHTML = document.getElementById("maleSelection").value;
    } else{
        var currentSelection = female_label.style.color;
        cell3.innerHTML = document.getElementById("femaleSelection").value;
        row.classList.add("femaleColorClass");
    }
    var button1 = document.createElement("button");
    button1.onclick = function(){editTableFunction(this)};
    var text = document.createTextNode("Edit");     
    button1.appendChild(text);
    cell4.appendChild(button1);
    var button2 = document.createElement("button");
    var text = document.createTextNode("Delete");
    button2.onclick = function(){deleteFunction(this)};
    button2.appendChild(text);
    cell4.appendChild(button2); 
    document.getElementById("userName").value = "";
    document.getElementById("userAge").value = "";
  }

  function deleteFunction(rowValue) {
    var i = rowValue.parentNode.parentNode.rowIndex;
    document.getElementById("loggerTable").deleteRow(i);
  }

  function editTableFunction(n){
    var i = n.parentNode.parentNode.rowIndex;
    rowCount = i;
    document.getElementById("userName").value = document.getElementById("loggerTable").rows[i].cells[0].innerHTML;
    document.getElementById("userAge").value = document.getElementById("loggerTable").rows[i].cells[1].innerHTML;
    var genderVal = document.getElementById("loggerTable").rows[i].cells[2].innerHTML;
    if (genderVal == "Male"){
        document.getElementById("maleSelection").checked = true;
    } else {
        document.getElementById("femaleSelection").checked = true;
    }
    document.getElementById("button_add_update").innerHTML = "Update";
  }

  function updateTableFunction(){
    document.getElementById("loggerTable").rows[rowCount].cells[0].innerHTML = document.getElementById("userName").value;
    document.getElementById("loggerTable").rows[rowCount].cells[1].innerHTML = document.getElementById("userAge").value;
    if(document.getElementById("maleSelection").checked){
        document.getElementById("loggerTable").rows[rowCount].className = "maleColorClass";
        var currentSelection = male_label.style.color;
        document.getElementById("loggerTable").rows[rowCount].cells[2].innerHTML = document.getElementById("maleSelection").value;
    } else{
        document.getElementById("loggerTable").rows[rowCount].className = "femaleColorClass";
        var currentSelection = female_label.style.color;
        document.getElementById("loggerTable").rows[rowCount].cells[2].innerHTML = document.getElementById("femaleSelection").value;
        //document.getElementById("loggerTable").rows[rowCount].classList.add("femaleColorClass");
    }
    document.getElementById("userName").value = "";
    document.getElementById("userAge").value = "";
  }

  function changeMaleColor(modifyColor){
    document.getElementById("male_label").style.color=modifyColor;
    var cols = document.getElementsByClassName("maleColorClass");
    for(i=0; i<cols.length; i++) {
        cols[i].style.color = modifyColor;
    }
  }

  function changeFemaleColor(modifyColor){
    document.getElementById("female_label").style.color=modifyColor;
    var cols = document.getElementsByClassName("femaleColorClass");
    for(i=0; i<cols.length; i++) {
        cols[i].style.color = modifyColor;
    }
  }


