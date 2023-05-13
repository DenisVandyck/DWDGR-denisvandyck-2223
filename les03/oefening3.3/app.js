const items = document.getElementById('items');
const button = document.getElementById('addButton');

button.addEventListener('click', function(){
	const promptTodo = prompt('Voeg een nieuwe Todo item');
	if(promptTodo){
		const promptItem = document.createElement('li');
		promptItem.textContent = promptTodo;
		items.appendChild(promptItem);
		
		promptItem.addEventListener('click', function(){
			promptItem.classList.toggle('checked');
		});

		promptItem.addEventListener('dblclick', function(){
			items.removeChild(promptItem);
		});
	}
});





