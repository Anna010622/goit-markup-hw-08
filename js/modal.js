const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const body = document.querySelector('body');

openModalBtn.addEventListener('click', onOpenModalBtnClick);
closeModalBtn.addEventListener('click', onCloseModalBtnClick);
modal.addEventListener('click', onBackdropClick);

function onOpenModalBtnClick() {
	window.addEventListener('keydown', onEscKeyPress);
	body.classList.add('noScroll');
	modal.classList.remove('backdrop--is-hidden');
}

function onCloseModalBtnClick() {
	window.removeEventListener('keydown', onEscKeyPress);
	body.classList.remove('noScroll');
	modal.classList.add('backdrop--is-hidden');
}

function onBackdropClick(event) {
	if (event.currentTarget === event.target) {
		onCloseModalBtnClick();
	}
}

function onEscKeyPress(event) {
	if (event.code === 'Escape') {
		onCloseModalBtnClick();
	}
}
