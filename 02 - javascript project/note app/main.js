const addNewNote = document.querySelector('.add-new-note');
let container = document.querySelector('.container');
addNewNote.addEventListener('click', () => {
	addNewNoteFun();
});

function addNewNoteFun(textComeFromLocals = '') {
	const mydiv = document.createElement('div');
	mydiv.classList.add('notes');
	mydiv.innerHTML = `
            <div class="tools">
                <button class="edit">edit</button>
                <button class="delete">delet</button>
            </div>
            <textarea class="main" disabled='true'></textarea>
             <textarea class="textarea" placeholder="type here"></textarea>`;
	// varibel
	const editBtn = mydiv.querySelector('.edit');
	const deleteBtn = mydiv.querySelector('.delete');
	let textArea = mydiv.querySelector('.textarea');
	let main = mydiv.querySelector('.main');

	// functions

	main.textContent = textComeFromLocals;

	editBtn.addEventListener('click', (e) => {
		textArea.classList.toggle('hidden');
		if (textArea.classList.contains('hidden')) {
			e.target.textContent = 'edit';
		} else {
			e.target.textContent = 'save';
		}
	});

	deleteBtn.addEventListener('click', () => {
		mydiv.remove();
	});

	textArea.addEventListener('input', (e) => {
		let value = e.target.value;
		main.innerHTML = `
    ${value}
    `;

		setTextAreaValueToLocalStorge();
	});

	container.appendChild(mydiv);
}

const comeFromLocalSTorge = JSON.parse(localStorage.getItem('textcontentmain'));
if (comeFromLocalSTorge) {
	comeFromLocalSTorge.forEach((e) => {
		addNewNoteFun(e);
	});
}
function setTextAreaValueToLocalStorge() {
	const allTextContentMain = document.querySelectorAll('.main');

	const arryTextContentMain = [];

	allTextContentMain.forEach((e) => {
		arryTextContentMain.push(e.textContent);
	});
	localStorage.setItem(
		'textcontentmain',
		JSON.stringify(arryTextContentMain)
	);
}
