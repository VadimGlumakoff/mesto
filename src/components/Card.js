export default class Card {
  constructor(card, handlePopupImage, templateSelectors, clickLike, userId) {
    this._name = card.name;
    this._link = card.link;
    this._likesArr = card.likes;
    this._likes = card.likes.length;
    this._ownerId = card.owner._id;
    this._cardId = card._id;
    this._userId = userId;
    this._handlePopupImage = handlePopupImage;
    this._templateSelectors = templateSelectors;
    this._clickLike = clickLike;
  }

  updateLikes(count) {
    this._elementLikeCount.textContent = count;
  }

  _openPopupImage() {
    this._handlePopupImage(this._name, this._link);
  }

  _getTemplate(templateSelector) {
    return document
      .querySelector(templateSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
  }

  _handleLikeButton() {
    this._likedButtonElement.classList.toggle("elements__like_active");
    this._clickLike(this._cardId, this, this._isLiked);
    this._isLiked = !this._isLiked;
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likedButtonElement.addEventListener("click", () => {
      this._handleLikeButton();
    });

    if (this._isOwner) {
      this._deleteButtonElement.addEventListener("click", () => {
        this._handleDeleteCard();
      });
    }

    this._cardImage.addEventListener("click", () => {
      this._openPopupImage();
    });
  }

  generateCard() {
    this._isLiked = this._likesArr.some((el) => {
      return el._id === this._userId;
    });
    this._isOwner = this._ownerId === this._userId;
    if (this._isOwner) {
      this._element = this._getTemplate(this._templateSelectors.owner);
    } else {
      this._element = this._getTemplate(this._templateSelectors.other);
    }

    this._cardImage = this._element.querySelector(".elements__image");
    this._cardImage.src = this._link;
    this._element.querySelector(".elements__name").textContent = this._name;
    this._cardImage.alt = this._name;
    this._elementLikeCount = this._element.querySelector(".elements__number");
    this._likedButtonElement = this._element.querySelector(".elements__like");
    if (this._isLiked) {
      this._likedButtonElement.classList.add("elements__like_active");
    }
    this._elementLikeCount.textContent = this._likes;
    if (this._isOwner) {
      this._deleteButtonElement =
        this._element.querySelector(".elements__delete");
    }

    this._setEventListeners();
    return this._element;
  }
}
