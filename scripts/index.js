const profilePopup = document.querySelector(".popup_type_profile");
const profileOpenButton = document.querySelector(".profile__edit");
const profileCloseButton = document.querySelector(".popup__close_profile");
const profileForm = document.querySelector(".popup__form_type_edit");
const addCardForm = document.querySelector(".popup__form_type_add");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about");
const popupAdd = document.querySelector(".popup_type_add");
const buttonAdd = document.querySelector(".profile__add");
const closeAdd = document.getElementById("close__add");
const template = document.querySelector("#template-card").content.querySelector(".elements__card");
const containerElements = document.querySelector(".elements");
const btnAddCard = document.getElementById("btn");
const cardLink = document.getElementById("card-link");
const cardName = document.getElementById("card-name");
const remove = document.querySelector(".elements__delete");
const imageCard = template.querySelector(".elements__image");
const title = template.querySelector(".elements__name");
const popupImageClose = document.getElementById("popup-close-image");
const imagePopup = document.querySelector(".popup_type_image");
const popupImageActive = document.querySelector(".popup__image");
const popupSubtitle = document.querySelector(".popup__subtitle");
const popupImageForm = document.getElementById("form-add-card");
const closeButtons = document.querySelectorAll(".popup__close");

//Закрытие esp
function popupEscClose(event) {
    if (event.key === 'Escape') {
     const open = document.querySelector('.popup_opened');
     closePopup(open);
    }
 }
 
 
 
 //Закрытие мышкой по оверлей
 function popupMouseClose(event) {
     if (event.target.classList.contains('popup_opened')) {
         const open = document.querySelector('.popup_opened');
     closePopup(open);
     }
 }

/*попап закрытие*/


function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', popupEscClose);
    document.removeEventListener('mouseup', popupMouseClose);
}



/*попап открытие*/
function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', popupEscClose);
    document.addEventListener('mouseup', popupMouseClose);
}

/*попап добавление картинки*/

buttonAdd.addEventListener("click", () => {
    const buttonSubmit = document.querySelector(config.submitButtonAddSelector);
    disableAddCardButton(buttonSubmit, config);
    openPopup(popupAdd)
});

/*попап редактирование пользователя*/

function openPopupProfile() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAboutMe.textContent;
    openPopup(profilePopup);
    
}

profileOpenButton.addEventListener("click", openPopupProfile);
/*submit*/

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMe.textContent = jobInput.value;
    closePopup(profilePopup);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);


/*Лайк активный*/
function toggleLike(evt) {
    evt.target.classList.toggle("elements__like_active");
}

/*Удаление карточки*/
function deleteCard(e) {
    e.target.closest(".elements__card").remove();
}

/*копия темплейта*/
function createCard(item) {
    const card = template.cloneNode(true);
    const imageCard = card.querySelector(".elements__image");
    const title = card.querySelector(".elements__name");
    title.textContent = item.name;
    imageCard.alt = item.name;
    imageCard.src = item.link;

    const likeButton = card.querySelector(".elements__like");
    likeButton.addEventListener("click", toggleLike);

    const deleteButton = card.querySelector(".elements__delete");
    deleteButton.addEventListener("click", deleteCard);

    imageCard.addEventListener("click", () => {
        popupImageActive.src = imageCard.src;
        popupImageActive.alt = item.name;
        popupSubtitle.textContent = title.textContent;
        openPopup(imagePopup);
    });

    return card;
    
}

closeButtons.forEach((button) => {
    const popup = button.closest(".popup");

    button.addEventListener("click", () => closePopup(popup));
});


/*Добавление карточек из массива*/

function renderCards() {
    initialCards.forEach((item) => {
        containerElements.prepend(createCard(item));
    });
}

renderCards();

/*Добавление карточки "Кнопка создать из формы"*/

addCardForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const name = cardName.value;
    const link = cardLink.value;

    const card = createCard({ name: name, link: link });

    containerElements.prepend(card);
    
    closePopup(popupAdd);

    cardName.value = "";
    cardLink.value = "";
});








