
// функция, чтобы после добавления карточки кнопка была не активной.
const disableAddCardButton = (button, config) => {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = true;
  }


const showInputError = (formElement, formInput, config, errorMessage) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;

};

const hideInputError = (formElement, formInput, config) => {
  const errorElement = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};


const isValid = (formElement, formInput, config) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, config, formInput.validationMessage);

  } else {
    hideInputError(formElement, formInput, config);

  }
};


const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const buttonElement = formElement.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, config);
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      isValid(formElement, formInput, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};


const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(form, config);

  });
};

function isInputInvalid(inputElement) {
  return !inputElement.validity.valid;
}

function hasInvalidInput(inputList) {
  return inputList.some(isInputInvalid);
}


function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
  }
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__name',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__type_error_activ'
});

// const resetInputError = () => {
//   const resetFormError = document.querySelector('.popup__form');
//   const resetInputError = Array.from(resetFormError.querySelectorAll('.form__name'));
//   resetInputError.forEach((input) => {
//     hideInputError(formElement, formInput, input);
//   })
// }