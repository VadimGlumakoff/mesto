export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._formElement = form;
    this._inputList = [
      ...this._formElement.querySelectorAll(this._config.inputSelector),
    ];
    this._inputError = [
      ...this._formElement.querySelectorAll(this._config.inputError),
    ];
    this._buttonElement = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  disableAddCardButton() {
    this._buttonElement.classList.add(this._config.inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((formInput) => {
      formInput.addEventListener("input", () => {
        this._isValid(formInput);
        this.toggleButtonState();
      });
    });
  }

  _isValid(formInput) {
    if (!formInput.validity.valid) {
      this._showInputError(formInput, formInput.validationMessage);
    } else {
      this._hideInputError(formInput);
    }
  }

  _showInputError(formInput, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${formInput.id}-error`
    );
    formInput.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(formInput) {
    const errorElement = this._formElement.querySelector(
      `.${formInput.id}-error`
    );
    formInput.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = "";
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._config.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.disabled = false;
      this._buttonElement.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some(this._isInputInvalid);
  }

  _isInputInvalid(inputElement) {
    return !inputElement.validity.valid;
  }
}
