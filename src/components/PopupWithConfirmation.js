import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(selectorPopup, handlerSubmit) {
    super(selectorPopup);
    this._handlerSubmit = handlerSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._submitForm = this._submitForm.bind(this);
  }

  open(card, cardId) {
    super.open();
    this._card = card;
    this._cardId = cardId;
  }

  _submitForm(evt) {
    evt.preventDefault();
    const submitButton = this._form.querySelector(".popup__button");
    this._handlerSubmit(this._card, this._cardId, submitButton);
    this._card.remove();
    this._card = null;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitForm);
  }
}
