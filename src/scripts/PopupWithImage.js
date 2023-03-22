import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImageActive = this._popup.querySelector(".popup__image");
    this._popupSubtitle = this._popup.querySelector(".popup__subtitle");
  }
  open(name, link) {
    super.open();
    this._popupSubtitle.textContent = name;
    this._popupImageActive.src = link;
    this._popupImageActive.alt = name;
  }
}
