const showInputError = (formElement, formInput, errorMessage) => {
    const errorElement = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.add('popup_type_error_activ');
    errorElement.textContent = errorMessage;
    
};

const hideInputError = (formElement, formInput) => {
    const errorElement = formElement.querySelector(`.${formInput.id}-error`);
    formInput.classList.remove('popup_type_error_activ');
    errorElement.textContent = '';
};

const isValid = (formElement, formInput) => {
    if (!formInput.validity.valid) {
        showInputError(formElement, formInput, formInput.validationMessage);
        
    } else {
        hideInputError(formElement, formInput);
        
    }
};


const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__name'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((formInput) => {
        formInput.addEventListener('input', () => {
          isValid(formElement, formInput);
          toggleButtonState(inputList, buttonElement);
        });
      });
};


const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    
    formList.forEach((form) => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
      })
      setEventListeners(form);
      
    });
  };
  
  function isInputInvalid(inputElement) {
    return !inputElement.validity.valid;
  }

  function hasInvalidInput(inputList) {
    return inputList.some(isInputInvalid);
  }


  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__button_disabled');
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove('popup__button_disabled');
    }
  }
 
  enableValidation();