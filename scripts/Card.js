export default class Card {
  constructor(data, handlePopupImage) {
    this._name = data.name;
    this._link = data.link;
    this._handlePopupImage = handlePopupImage;
  }

  _openPopupImage() {
    this._handlePopupImage(this._name, this._link);
  }

  _getTemplate() {
    return document
      .querySelector("#template-card")
      .content.querySelector(".elements__card")
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._element
      .querySelector(".elements__like")
      .classList.toggle("elements__like_active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__like")
      .addEventListener("click", () => {
        this._handleLikeButton();
      });

    this._element
      .querySelector(".elements__delete")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._openPopupImage();
      });
  }

  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();
    this._element.querySelector(".elements__image").src = this._link;
    this._element.querySelector(".elements__name").textContent = this._name;
    this._element.querySelector(".elements__image").alt = this._name;

    return this._element;
  }
}
