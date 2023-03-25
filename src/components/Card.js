export default class Card {
  constructor(data, handlePopupImage, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handlePopupImage = handlePopupImage;
    this._templateSelector = templateSelector;
  }

  _openPopupImage() {
    this._handlePopupImage(this._name, this._link);
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._likedButtonElement.classList.toggle("elements__like_active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likedButtonElement.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._deleteButtonElement.addEventListener("click", () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._openPopupImage();
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".elements__image");
    this._cardImage.src = this._link;
    this._element.querySelector(".elements__name").textContent = this._name;
    this._cardImage.alt = this._name;

    this._likedButtonElement = this._element.querySelector(".elements__like");
    this._deleteButtonElement =
      this._element.querySelector(".elements__delete");
    this._setEventListeners();
    return this._element;
  }
}
