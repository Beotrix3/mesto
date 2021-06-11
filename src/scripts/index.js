import Card from './Card.js'
import FormValidator from './FormValidator.js'

const openEditPopupButton = document.querySelector('.profile__edit-button');
const openAddPopupButton = document.querySelector('.profile__add-button'); 
const popupEdit = document.querySelector('.popup_edit-profile'); 
const popupAdd = document.querySelector('.popup_element_add'); 
export const popupImage = document.querySelector('.popup_type_image'); 
export const popupLargeImage = document.querySelector('.popup__image');
export const popupCaption = document.querySelector('.popup__caption'); 
const closeEditPopupButton = popupEdit.querySelector('.popup__close-button'); 
const closeAddPopupButton = popupAdd.querySelector('.popup__close-button'); 
const closeImagePopupButton = popupImage.querySelector('.popup__close-button'); 
const formElement = document.querySelector('.popup__container'); 
const profileName = document.querySelector('.profile__name'); 
const profileDescription = document.querySelector('.profile__description'); 
const popupName = formElement.querySelector('.popup__info_type_name');
const popupDescription = formElement.querySelector('.popup__info_type_description');

const elements = document.querySelector('.elements');

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscPopup);
  popup.addEventListener('click', closeOverlayPopup);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscPopup);
  popup.removeEventListener('click', closeOverlayPopup);
}

function closeEscPopup(evt) {
  if(evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closeOverlayPopup(evt) {
  if(evt.target === evt.currentTarget){
    closePopup(evt.target);
  }
}

openEditPopupButton.addEventListener('click', function() {
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent; 
  openPopup(popupEdit);
});
 
closeEditPopupButton.addEventListener('click', function () {
  closePopup(popupEdit);
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;
  closePopup(popupEdit);
}

formElement.addEventListener('submit', formSubmitHandler);

openAddPopupButton.addEventListener('click', function() {
  openPopup(popupAdd);
});
 
closeAddPopupButton.addEventListener('click', function () {
  closePopup(popupAdd);
});

closeImagePopupButton.addEventListener('click', function() {
  closePopup(popupImage);
});

const initialCards = [
  {
    name: 'Бергамо',
    link: 'https://images.unsplash.com/photo-1597425922106-4b9353c68f33?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1391&q=80' 
  },
  {
    name: 'Флоренция',
    link: 'https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' 
  },
  {
    name: 'Милан',
    link: 'https://images.unsplash.com/photo-1512204925985-f52390a87fda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
  },
  { 
    name: 'Венеция',
    link: 'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' 
  },
  {
    name: 'Верона',
    link: 'https://images.unsplash.com/photo-1567285272491-66350595f88b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=726&q=80' 
  },
  { 
    name: 'Кампителло-ди-Фасса',
    link: 'https://images.unsplash.com/photo-1605609476793-3015923b4be1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=613&q=80' 
  }
];

function createCard(element) { 
  const card = new Card(element.name, element.link, '#element-template');
  return card.render();
}
 
function renderCard(element, elements) { 
  elements.prepend(createCard(element));
} 
 
initialCards.forEach((element) => {
  elements.append(createCard(element)); 
}); 
 
const formAddElement = document.querySelector('.popup__container_add');
const button = document.querySelector('popup__save-button');
const popupTitle = formAddElement.querySelector('.popup__info_type_title'); 
const popupLink = formAddElement.querySelector('.popup__info_type_link');

const resetValidator = new FormValidator({
  formSelector: '.popup__container', 
  inputSelector: '.popup__info', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorClass: 'popup__info_type_error', 
  errorActiveClass: 'popup__input-error_active'
}, formAddElement);
 
function createElement(evt) { 
  evt.preventDefault(); 
  renderCard({ 
    name: popupTitle.value, 
    link: popupLink.value 
  }, elements); 
  formAddElement.reset();
  resetValidator.toggleButtonState(button, [popupTitle, popupLink]);
  closePopup(popupAdd); 
}

formAddElement.addEventListener('submit', createElement);

const editPopupValidator = new FormValidator ({ 
  formSelector: '.popup__container', 
  inputSelector: '.popup__info', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorClass: 'popup__info_type_error', 
  errorActiveClass: 'popup__input-error_active' 
}, formElement); 

editPopupValidator.enableValidation();

const addPopupValidator = new FormValidator ({ 
  formSelector: '.popup__container', 
  inputSelector: '.popup__info', 
  submitButtonSelector: '.popup__save-button', 
  inactiveButtonClass: 'popup__save-button_disabled', 
  inputErrorClass: 'popup__info_type_error', 
  errorActiveClass: 'popup__input-error_active' 
}, formAddElement);

addPopupValidator.enableValidation();