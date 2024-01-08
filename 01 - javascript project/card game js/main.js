

let card = document.querySelectorAll('.card');
let haseFlipedCard = false;
let firstCard;
let secondCard;
let lockboard = false;

function flipcard() {
	if (lockboard) return;
	this.classList.add('flip-card');
	if (!haseFlipedCard) {
		haseFlipedCard = true;
		firstCard = this;
		console.log(haseFlipedCard, firstCard);
	} else {
		haseFlipedCard = false;
		secondCard = this;
		// console.log(firstCard, secondCard);
		console.log(firstCard.dataset.framwork, 'firstcard');
		console.log(secondCard.dataset.framwork, 'secondCard');

		console.log('remove');
		CheackForMatchCards();
	}
}

card.forEach((e, index) => {
	e.addEventListener('click', flipcard);
});

function CheackForMatchCards() {
	if (firstCard.dataset.framwork === secondCard.dataset.framwork) {
		firstCard.removeEventListener('click', flipcard);
		secondCard.removeEventListener('click', flipcard);
	} else {
		settimeout();
	}
}

function settimeout() {
	lockboard = true;
	setTimeout(() => {
		firstCard.classList.remove('flip-card');
		secondCard.classList.remove('flip-card');
		lockboard = false;
	}, 1500);
}

(function shuffle() {
	card.forEach((e) => {
		let randomPos = Math.floor(Math.random() * 8);
		e.style.order = randomPos;
	});
})();
