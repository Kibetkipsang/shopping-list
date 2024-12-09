// create our shopping list array
const shoppingList=[];

// we declare our elements using get
const itemInput = document.getElementById('input');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const shoppingListElements = document.getElementById('list');
const submitButton = document.getElementById('submitButton');
//  functionality of our add item space
function addItem(){
    const itemText = itemInput.value.trim()
    if (itemText === "") return;
    shoppingList.push(itemText);
    renderList();
    itemInput.value="";
    // trim clears unnecessary spaces to avoid errors 
    // return is to prevent empty values to the list
    // shoppinglist.push pushes our item to the array we created
    // renderlist refreshes our list everytime we push an item to itemInput
    // iteminput creates an empty space for another item to be typed after push
}
// This is to mark items as purchased
function togglePurchased(event) {
    const itemElement = event.target;
    itemElement.classList.toggle('purchased');
  }
// clearing our shoppinglist
function clearList(){
    shoppingList.length = 0;
    renderList();
}
// we now render our shopping list
function renderList() {
    shoppingListElements.innerHTML = '';
    shoppingList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.addEventListener('click', togglePurchased);
        shoppingListElements.appendChild(listItem);
    });
}
function submitList() {
    if (shoppingList.length === 0) {
      alert('shopping list is empty!');
    } else {
      alert('Submitted items:\n' + shoppingList.join(', '));
    }
  }
// Attaching event listeners
addButton.addEventListener('click', addItem);
clearButton.addEventListener('click', clearList);
submitButton.addEventListener('click', submitList);
itemInput.addEventListener('keypress', event => {
    if (event.key === 'Enter') addItem();
});
