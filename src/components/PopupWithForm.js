import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handlerSubmit) {
    super(selector);
    this._handlerSubmit = handlerSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._button = this._form.querySelector(".popup__button");
    this._inputs = Array.from(this._form.querySelectorAll(".popup__name"));
    this._submitForm = this._submitForm.bind(this);
    this._oldTextButton = this._button.textContent;
  }

  open(text) {
    super.open();
    this._newTextButton = text;
  }

  returnOldTextButton() {
    this._button.textContent = this._oldTextButton;
  }

  _getInputValues() {
    const object = {};
    this._inputs.forEach((input) => {
      object[input.name] = input.value;
    });

    return object;
  }

  _submitForm(evt) {
    evt.preventDefault();
    this._handlerSubmit(this._getInputValues());
    this._button.textContent = this._newTextButton;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitForm);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
