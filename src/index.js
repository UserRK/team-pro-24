import './sass/main.scss';
// burger-menu-------------------------------------------------------------/

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[js-open-menu]"),
    closeMenulBtn: document.querySelector("[js-close-menu]"),
    menu: document.querySelector("[js-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenulBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();

// modal-locations----------------------------------------------------------/
(() => {
  const refs = {
    openModalBtn: document.querySelector('[location-modal-open]'),
    closeModalBtn: document.querySelector('[location-modal-close]'),
    modal: document.querySelector('[location-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


//modal-about----------------------------------------------------------------/
(() => {
  const refs = {
    openModalBtn: document.querySelector('[about-modal-open]'),
    closeModalBtn: document.querySelector('[about-modal-close]'),
    modal: document.querySelector('[about-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// /modal-buy------------------------------------------------------------------/

(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-modal-open]'),
    closeModalBtn: document.querySelector('[buy-modal-close]'),
    modal: document.querySelector('[buy-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();


// masonry -----------------------------------------------------------------/

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 160
});






