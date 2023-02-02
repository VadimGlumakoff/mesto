const popupBg = document.querySelector(".popup");
const openButton = document.querySelector(".profile__edit");
const buttonClose = document.querySelector(".popup__close");
const formElement = document.querySelector(".popup__form");
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("about");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about");
const popupAdd = document.getElementById("popup__add");
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
const popupImage = document.getElementById('popup-image');
const popupImageClose = document.getElementById('popup-close-image');
const popupImageActive = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupImageForm = document.getElementById('form-add-card');

/*попап закрытие*/
function popupOff() { 

    popupBg.classList.remove("popup_opened"); 

}

/*попап добавление картинки*/
function popupAddOn() {
    popupAdd.classList.add("popup_opened");
}

buttonAdd.addEventListener("click", popupAddOn);

function popupAddOff() {
    popupAdd.classList.remove("popup_opened");
}

closeAdd.addEventListener("click", popupAddOff);


/*попап редактирование пользователя*/

function popupOn() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAboutMe.textContent;
    popupBg.classList.add("popup_opened");
}

openButton.addEventListener("click", popupOn);



buttonClose.addEventListener("click", () => {
    popupBg.classList.remove("popup_opened");
});

/*submit*/


function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMe.textContent = jobInput.value;
    popupOff();
}

formElement.addEventListener("submit", handleFormSubmit);



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






/*Закрытие попап добавления карточки*/
function popupImageOff() {
    popupImage.classList.remove('popup_opened');
}

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
        popupImage.classList.add('popup_opened');
        popupImageActive.src = imageCard.src;
        popupSubtitle.textContent = title.textContent;
    });

    popupImageClose.addEventListener('click', popupImageOff);
    
    
    return card;
    
}

   /*Добавление карточек из массива*/

    function renderCards() {
    initialCards.forEach((item) => {
        
        containerElements.prepend(createCard(item));

        
    });
    
    }
 
    renderCards();

    /*Добавление карточки "Кнопка создать из формы"*/

 btnAddCard.addEventListener('click', (evt) => {
    evt.preventDefault();
    
    const name = cardName.value;
    const link = cardLink.value;
    
    const card = createCard({name: name, link: link});
    
    
    containerElements.prepend(card);

    const likeButton = card.querySelector('.elements__like');
    likeButton.addEventListener('click', likeCard);

    const deleteButton = card.querySelector('.elements__delete');
    deleteButton.addEventListener('click', cardDelete);

    

    popupImageClose.addEventListener('click', popupImageOff);
    popupAddOff();
 });



