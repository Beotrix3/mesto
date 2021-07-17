const openEditPopupButton = document.querySelector('.profile__edit-button'); 
const openAddPopupButton = document.querySelector('.profile__add-button');  
const popupEdit = document.querySelector('.popup_edit-profile');  
const popupAdd = document.querySelector('.popup_element_add');  
const popupImage = document.querySelector('.popup_type_image');  
const popupLargeImage = document.querySelector('.popup__image'); 
const popupCaption = document.querySelector('.popup__caption');  
const closeEditPopupButton = popupEdit.querySelector('.popup__close-button');  
const closeAddPopupButton = popupAdd.querySelector('.popup__close-button');  
const closeImagePopupButton = popupImage.querySelector('.popup__close-button');  
const formElement = document.querySelector('.popup__container');  
const profileName = document.querySelector('.profile__name');  
const profileDescription = document.querySelector('.profile__description');  
const popupName = formElement.querySelector('.popup__info_type_name'); 
const popupDescription = formElement.querySelector('.popup__info_type_description');

const elements = document.querySelector('.elements');

const templateSelector = '#element-template'

const formAddElement = document.querySelector('.popup__container_add');
const popupTitle = formAddElement.querySelector('.popup__info_type_title');  
const popupLink = formAddElement.querySelector('.popup__info_type_link');

const config = ({
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__info_type_error',
  errorActiveClass: 'popup__input-error_active'
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

export {
  openEditPopupButton,
  openAddPopupButton,
  popupEdit,
  popupAdd,
  popupImage,
  popupLargeImage,
  popupCaption,
  closeEditPopupButton,
  closeAddPopupButton,
  closeImagePopupButton,
  formElement,
  profileName,
  profileDescription,
  popupName,
  popupDescription,
  elements,
  formAddElement,
  popupTitle,
  popupLink,
  config,
  initialCards,
  templateSelector
}