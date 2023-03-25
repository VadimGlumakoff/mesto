export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._closeButton = this._popup.querySelector(".popup__close");
    this.close = this.close.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._hanldeMouseClose = this._hanldeMouseClose.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");

    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  _hanldeMouseClose(event) {
    if (event.target.classList.contains("popup_opened")) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener("click", this.close);
    this._popup.addEventListener("mousedown", this._hanldeMouseClose);
  }
}
