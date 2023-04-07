const buttons = document.querySelectorAll('.portfolio__button');
const portfolio = document.querySelector('.portfolio__cards');
const cards = document.querySelectorAll('.card');

showAll();

buttons.forEach(btn =>
	btn.addEventListener('click', () => {
		showVisibleCards(btn.dataset.value);
		buttons.forEach(btn => btn.classList.remove('portfolio__button--current'));

		btn.classList.add('portfolio__button--current');
	})
);

function showVisibleCards(value) {
	if (value === 'all') {
		showAll();
		return;
	}

	cards.forEach(card => {
		if (card.dataset.value === value) {
			card.classList.add('visible');
		} else card.classList.remove('visible');
	});
}

function showAll() {
	cards.forEach(card => card.classList.add('visible'));
}
