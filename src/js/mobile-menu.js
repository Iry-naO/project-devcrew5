(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-mobile-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-mobile-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-mobile]'),
  };

  const menuLinks = document.querySelectorAll('[data-mobile] a');

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleModal();
    });
  });

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
