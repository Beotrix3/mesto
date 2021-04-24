let openPopupButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__close-button');
let savePopupButton = document.querySelector('.popup__save-button');

function togglePopup(evt) {
  evt.preventDefault();
  popup.classList.toggle('popup_opened');
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

openPopupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);

let formElement = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupName = document.querySelector('.popup__info_name');
let popupDescription = document.querySelector('.popup__info_description');

function formSubmitHandler (evt) {
  evt.preventDefault();
  popup.classList.toggle('popup_opened');
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
}

formElement.addEventListener('submit', formSubmitHandler);