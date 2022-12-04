var form = document.querySelector("#addForm");
var itemList = document.querySelector("#items");
var filter = document.querySelector("#filter");

form.addEventListener('submit',addItem);
console.log(form);
function addItem(e){

    console.log("Event Type: " + e.type);
    e.preventDefault();
    // Get Input value
    var newItem = document.querySelector("#item").value;
    console.log(newItem);
    var li = document.createElement('li');
    li.className = 'list-group-item';
   
   li.appendChild(document.createTextNode(newItem)); 

   var deletBtn = document.createElement('button');
   deletBtn.className = 'btn btn-danger btn-sm float-right delete';
   deletBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deletBtn);
   
   itemList.appendChild(li);
}

itemList.addEventListener('click',removeItem);

function removeItem(e){
   if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

filter.addEventListener('keyup', filterItems);

function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
        }
    );
}