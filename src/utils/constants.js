const openEditPopupButton = document.querySelector('.profile__edit-button'); 
const openAddPopupButton = document.querySelector('.profile__add-button'); 
const openAvatarPopupButton = document.querySelector('.profile__avatar-button');

const popupEdit = document.querySelector('.popup_edit-profile');  
const popupAdd = document.querySelector('.popup_element_add');  
const popupImage = document.querySelector('.popup_type_image');
const popupAvatar = document.querySelector('.popup_edit-avatar');
const popupVerify = document.querySelector('.popup_verify-delete');

const closeEditPopupButton = popupEdit.querySelector('.popup__close-button');  
const closeAddPopupButton = popupAdd.querySelector('.popup__close-button');  
const closeImagePopupButton = popupImage.querySelector('.popup__close-button');
const closeAvatarPopupButton = popupAvatar.querySelector('.popup__close-button');
const closeVerifyPopupButton = popupVerify.querySelector('.popup__close-button');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const popupLargeImage = document.querySelector('.popup__image'); 
const popupCaption = document.querySelector('.popup__caption');

const formElement = document.querySelector('.popup__container');
const formAddElement = document.querySelector('.popup__container_add');
const formAvatarElement = document.querySelector('.popup__container_avatar');
const formVerifyElement = document.querySelector('.popup__container_verify');

const popupName = formElement.querySelector('.popup__info_type_name'); 
const popupDescription = formElement.querySelector('.popup__info_type_description');

const popupTitle = formAddElement.querySelector('.popup__info_type_title');  
const popupLink = formAddElement.querySelector('.popup__info_type_link');

const elements = document.querySelector('.elements');

const config = ({
  formSelector: '.popup__container',
  inputSelector: '.popup__info',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__info_type_error',
  errorActiveClass: 'popup__input-error_active'
});

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
  popupAvatar,
  openAvatarPopupButton,
  closeAvatarPopupButton,
  formAvatarElement,
  closeVerifyPopupButton,
  formVerifyElement,
  popupVerify
}