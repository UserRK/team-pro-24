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