const profilePopup = document.querySelector(".popup_type_profile");
const popup = document.querySelector('.popup');
const profileOpenButton = document.querySelector(".profile__edit");
const profileCloseButton = document.querySelector(".popup__close_profile");
const profileForm = document.querySelector(".popup__form_type_edit");
const addCardForm = document.querySelector('.popup__form_type_add');
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about");
const popupAdd = document.querySelector(".popup_type_add");
const buttonAdd = document.querySelector(".profile__add");
const closeAdd = document.getElementById("close__add");
const template = document.querySelector('#template-card').content.querySelector('.elements__card');
const containerElements = document.querySelector('.elements');
const btnAddCard = document.getElementById('btn');
const cardLink = document.getElementById('card-link');
const cardName = document.getElementById('card-name');
const remove = document.querySelector('.elements__delete');
const imageCard = template.querySelector('.elements__image');
const title = template.querySelector('.elements__name');
const popupImageClose = document.getElementById('popup-close-image');
const imagePopup = document.querySelector('.popup_type_image');
const popupImageActive = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupImageForm = document.getElementById('form-add-card');

/*попап закрытие*/

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

/*попап открытие*/
function openPopup(popup) {
    popup.classList.add('popup_opened');
}


/*попап добавление картинки*/

buttonAdd.addEventListener("click", () => openPopup(popupAdd));

closeAdd.addEventListener("click", () => closePopup(popupAdd));




/*попап редактирование пользователя*/

function openPopupProfile() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAboutMe.textContent;
    openPopup(profilePopup);
}


profileOpenButton.addEventListener("click", openPopupProfile);
profileCloseButton.addEventListener("click", () => closePopup(profilePopup));
/*submit*/


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMe.textContent = jobInput.value;
    closePopup(profilePopup);
}

profileForm.addEventListener("submit", handleProfileFormSubmit);



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];



/*Лайк активный*/
function likeCard(evt) {
    evt.target.classList.toggle('elements__like_active');
} 

/*Удаление карточки*/
function cardDelete(e) {
    e.target.closest('.elements__card').remove();
}



/*копия темплейта*/
function createCard(item) {
    const card = template.cloneNode(true);
    const imageCard = card.querySelector('.elements__image');
    const title = card.querySelector('.elements__name');
    title.textContent = item.name;
    imageCard.alt = item.name;
    imageCard.src = item.link;

    const likeButton = card.querySelector('.elements__like');
    likeButton.addEventListener('click', likeCard);

    const deleteButton = card.querySelector('.elements__delete');
    deleteButton.addEventListener('click', cardDelete);

    imageCard.addEventListener('click', () => {
        imageCard.addEventListener('click', () => openPopup(imagePopup));
        popupImageActive.src = imageCard.src;
        popupImageActive.alt = cardName.value;
        popupSubtitle.textContent = title.textContent;
    });
    
    
    return card;
    
}

popupImageClose.addEventListener('click', () => closePopup(imagePopup));
  

/*Добавление карточек из массива*/

    function renderCards() {
    initialCards.forEach((item) => {
        
        containerElements.prepend(createCard(item));

        
    });
    
    }
 
    renderCards();

    /*Добавление карточки "Кнопка создать из формы"*/

 addCardForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    const name = cardName.value;
    const link = cardLink.value;
    
    const card = createCard({name: name, link: link});
    
    cardName.value ="";
    cardLink.value ="";
    
    containerElements.prepend(card);

    closePopup(popupAdd);
 });



