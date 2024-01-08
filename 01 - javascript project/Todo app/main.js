let inp = document.querySelector('#inp');
const form = document.querySelector('form');
let btnSubmit = document.querySelector('.btnSubmit');

const getlocaltodos = JSON.parse(localStorage.getItem('compelete'));

if (getlocaltodos) {
	getlocaltodos.forEach((items) => {
		addTodo(items);
	});
}
function addTodo(localcompelet) {
	let inpValue = inp.value.trim();
	console.log(inpValue);
	let ul = document.createElement('ul');

	if (localcompelet) {
		ul.innerHTML = ` 
        <li class='li-todo Compelete'>
		${localcompelet}
         </li>
		    <span>Compelete</span>
         <input type="checkbox" class='check-box-inp' checked >
           <button class='remove'>remove</button>
         <button class='edit' disabled>edit</button>
		 <button class='remove-compelete'>removeLocal</button>
		  <button class='copyTex'>copyText</button>
         `;
	}
	if (inpValue) {
		ul.innerHTML = ` 
        <li class='li-todo'>
		${inpValue}
         </li>
		    <span></span>
         <input type="checkbox" class='check-box-inp' title='Compelete, save this to your localstorge'>
           <button class='remove'>remove</button>
         <button class='edit'>edit</button>
		  <button class='remove-compelete' disabled='true'>removeLocal</button>
		
		    <button class='copyTex'>copyText</button>
         `;
	}

	let todoLi = ul.querySelector('li');
	let checkBox = ul.querySelector('.check-box-inp');
	let span = ul.querySelector('span');
	const removeBtn = ul.querySelector('.remove');
	const editBtn = ul.querySelector('.edit');
	const removeCompelete = ul.querySelector('.remove-compelete');
	const textCopy = ul.querySelector('.copyTex');

	removeCompelete.addEventListener('click', () => {
		localStorage.removeItem('compelete');
		ul.remove();
	});
	textCopy.addEventListener('click', () => {
		navigator.clipboard;
		console.log(navigator.clipboard.writeText(todoLi.textContent));
	});
	// append & Redner Function
	document.body.appendChild(ul);
	renderEventListener(
		todoLi,
		checkBox,
		span,
		removeBtn,
		editBtn,
		ul,

		removeCompelete
	);
}

// submit function
form.addEventListener('submit', (e) => {
	e.preventDefault();
	if (inp.value.trim()) {
		addTodo(e);
	}

	inp.value = '';
});

function renderEventListener(
	todoLi,
	checkBox,
	span,
	removeBtn,
	editBtn,
	ul,
	removeCompelete
) {
	console.log(removeCompelete);
	checkBox.addEventListener('input', () => {
		todoLi.classList.toggle('Compelete');

		if (todoLi.classList.contains('Compelete')) {
			setTolocalSTroge();
			span.textContent = 'Compelete';
			editBtn.disabled = true;
			removeCompelete.disabled = false;
		} else {
			span.textContent = '';
			editBtn.disabled = false;
			removeCompelete.disabled = true;
		}
	});

	todoLi.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		ul.remove();
	});

	removeBtn.addEventListener('click', () => {
		ul.remove();
	});

	editing(todoLi, editBtn, checkBox, ul, span);
}

function editing(todoLi, editBtn, checkBox) {
	editBtn.addEventListener('click', (eventEdit) => {
		changeBtnText(eventEdit, todoLi); // this change text content btn edit , disabel submit (enter) keybord
		checkBox.classList.toggle('showHideCheckBox');
		todoLi.classList.toggle('editing');

		if (todoLi.classList.contains('editing')) {
			inp.addEventListener('input', () => {
				if (todoLi.classList.contains('editing')) {
					let todoLiEdit = document.querySelector('.editing');
					todoLiEdit.innerHTML = null;
					todoLiEdit.innerHTML = inp.value;
				}
				if (!inp.value) {
					// show pop up for edit inp value is null
					// alert('u are save notghi you sure that ? save ?')
				}
			});
		}
	});
}

function changeBtnText(eventEdit, todoLi) {
	if (eventEdit.target.textContent == 'edit') {
		eventEdit.target.textContent = 'save';
		btnSubmit.disabled = true;
		inp.value = todoLi.innerText;
	} else {
		eventEdit.target.textContent = 'edit';
		btnSubmit.disabled = false;
		inp.value = '';
		console.log(inp.value);
	}
}

function setTolocalSTroge() {
	let com = document.querySelectorAll('.Compelete');
	let compelateTodo = [];
	com.forEach((allTodo) => {
		compelateTodo.push(allTodo.innerText);
	});

	localStorage.setItem('compelete', JSON.stringify(compelateTodo));
}
