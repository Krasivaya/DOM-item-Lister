const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('input', searchItem);

// Add an item
function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.querySelector('#item').value;

    // Create new li element
    const li = document.createElement('li');
    // Add a className
    li.className = 'list-group-item';
    // Add text Node
    li.innerText = newItem;

    // Create del button element
    const delBtn = document.createElement('button');
    // Add class
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Add text node
    delBtn.appendChild(document.createTextNode('X'));
    // Insert delBtn to li
    li.appendChild(delBtn);

    // Add li element to itemList
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//Search item
function searchItem(e){
    // Convert text to lower case
    const text = e.target.value.toLowerCase();
    // Get lis
    const items = itemList.querySelectorAll('li');
    // Add conditions
    items.forEach(function(item){
        const itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }

    })
}