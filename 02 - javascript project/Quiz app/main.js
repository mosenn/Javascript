const data = [
	{
		question: '1-How long does it take for us to see sunlight on Earth?',
		a: '10',
		b: '3.9',
		c: '8.3',
		d: '6',
		correct: 'c',
	},
	{
		question: '2-who is better ?',
		a: 'var',
		b: 'let',
		c: 'const',
		d: 'b and c',
		correct: 'd',
	},
	{
		question: '3-we can set function in the var varibel?',
		a: 'yes we can ',
		b: 'no we can just set declared function to let and const',
		c: 'we cant set function to any varibels',
		d: 'we set function to let and var',
		correct: 'b',
	},
];

let GetFirstQuiz = 0;
let trueAnswer = 0;
// show massege quiz for ui be end
const showMassge = document.querySelector('.show-massege');
const wrapperBoxQuiz = document.querySelector('.wrapper-box-quiz');

// qustion varibel
const printQustion = document.getElementById('print-qustion');

// label varibel
const labelb = document.getElementById('text-for-b');
const labelc = document.getElementById('text-for-c');
const labeld = document.getElementById('text-for-d');
const labela = document.getElementById('text-for-a');
// btn varibel

const btnSubmit = document.getElementById('Submit');

// all inp class
let allInputs = document.querySelectorAll('.get-inputs');

// functions
showQuiz();
function showQuiz() {
	removeCheckRadio();

	const showFirstQuiz = data[GetFirstQuiz];
	printQustion.innerText = showFirstQuiz.question;
	labela.innerText = showFirstQuiz.a;
	labelb.innerText = showFirstQuiz.b;
	labelc.innerText = showFirstQuiz.c;
	labeld.innerText = showFirstQuiz.d;
}

// get inputs ids
function cheackinpvalue() {
	let un;
	allInputs.forEach((e) => {
		if (e.checked) {
			un = e.id;
		}
	});

	return un;
}
// remove check radio
function removeCheckRadio() {
	allInputs.forEach((inputs) => {
		inputs.checked = false;
	});
}

// btn submit happen someting
btnSubmit.addEventListener('click', () => {
	// this id inputs

	const checkvalues = cheackinpvalue();

	// check id inputs to data correct answer



	if (checkvalues) {
	if (checkvalues === data[GetFirstQuiz].correct) {
			trueAnswer++;
		}
		GetFirstQuiz++;
		if (GetFirstQuiz < data.length) {
			showQuiz();
		} else {
			showMassge.classList.add('show');
			wrapperBoxQuiz.classList.add('hide');
			// console.log('quiz is end ');
			showMassge.innerHTML = `
		<div class='show-result-quiz'>
		<p> your score be ture :${trueAnswer} in ${data.length} qustion</p>
		
		<button onclick="location.reload()">Reload</button></div>
		
		`;
		}
	
	}

	console.log(trueAnswer);
});

// copy text skype

const btn = document.querySelector('.btn');
const copy = document.querySelector('#copy');
btn.addEventListener('click', () => {
	let textSkype = navigator.clipboard.writeText(copy.textContent);
	alert('skype is Copy open your skype and found me ✌', copy.textContent);
});
