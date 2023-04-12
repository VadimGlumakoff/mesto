export default class Card {
  constructor(
    card,
    handlePopupImage,
    templateSelector,
    clickLike,
    userId,
    deleteCard
  ) {
    this._name = card.name;
    this._link = card.link;
    this._likesArr = card.likes;
    this._likes = card.likes.length;
    this._ownerId = card.owner._id;
    this._cardId = card._id;
    this._userId = userId;
    this._handlePopupImage = handlePopupImage;
    this._templateSelector = templateSelector;
    this._clickLike = clickLike;
    this._deleteCard = deleteCard;
  }

  updateLikes(count) {
    this._elementLikeCount.textContent = count;
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
    this._clickLike(this._cardId, this, this._isLiked);
    this._isLiked = !this._isLiked;
  }

  _handleDeleteCard() {
    this._deleteCard(this._element, this._cardId);
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
    // if (this._isOwner) {
    //   this._element = this._getTemplate(this._templateSelectors.owner);
    // } else {
    //   this._element = this._getTemplate(this._templateSelectors.other);
    // }
    this._element = this._getTemplate();
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
    this._deleteButtonElement =
      this._element.querySelector(".elements__delete");

    if (!this._isOwner) {
      this._deleteButtonElement.style.display = "none";
    }

    this._setEventListeners();
    return this._element;
  }
}
