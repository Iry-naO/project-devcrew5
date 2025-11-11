(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn1: document.querySelector('[data-modal-stop]'),
    closeModalBtn2: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  const subscribeForm = document.querySelector('.subscribe-form');
  const emailInput = document.querySelector('#subscribe-email');
  if (subscribeForm && emailInput) {
    subscribeForm.addEventListener('submit', e => {
      e.preventDefault();
      if (emailInput.checkValidity()) {
        toggleModal();
        subscribeForm.reset();
      } else {
        emailInput.reportValidity();
      }
    });
  }

  document.addEventListener('click', e => {
    const modal = document.querySelector('[data-modal]');

    if (e.target.closest('button[data-modal-close], button[data-modal-stop]')) {
      modal.classList.remove('is-open');
    }

    if (e.target === modal) {
      modal.classList.remove('is-open');
    }
  });

  if (refs.openModalBtn) {
    refs.openModalBtn.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn1.addEventListener('click', toggleModal);
  refs.closeModalBtn2.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();
