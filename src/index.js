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

// modal-window----------------------------------------------------------/

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

