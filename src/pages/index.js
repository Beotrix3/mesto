import './index.css'

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithVerify from '../components/PopupWithVerify.js';
 
import {
  openEditPopupButton,
  openAddPopupButton,
  popupEdit,
  popupAdd,
  popupImage,
  formElement,
  popupName,
  popupDescription,
  elements,
  formAddElement,
  config,
  initialCards,
  openAvatarPopupButton,
  formAvatarElement,
  popupAvatar,
  popupVerify
} from '../utils/constants.js'

const editPopupValidator = new FormValidator (config, formElement);  
editPopupValidator.enableValidation(); 
 
const addPopupValidator = new FormValidator (config, formAddElement); 
addPopupValidator.enableValidation();

const avatarPopupValidator = new FormValidator(config, formAvatarElement);
avatarPopupValidator.enableValidation();

const imagePopup = new PopupWithImage(popupImage)
imagePopup.setEventListeners()

const verifyPopup = new PopupWithVerify(popupVerify)
verifyPopup.setEventListeners()

function createCard(data) {
  const card = new Card({
    data: data,
    handleCardClick: () => imagePopup.open(data),
    handleVerifyDelete: () => verifyPopup.setSubmitAction(() => {
      card.handleDeleteClick()
      verifyPopup.close()
    }, verifyPopup.open())
  }, elements);
  
  return card
}

const cardList = new Section({
  items: initialCards,
  renderer: item => {
    const card = createCard(item)
    const cardElement = card.render();
    cardList.addItem(cardElement)
  }
}, elements);

//создание новой карточки

openAddPopupButton.addEventListener('click', () => {
  addPopupValidator.toggleButtonState()
  popupFormCardAdd.open()
});

const popupFormCardAdd = new PopupWithForm(popupAdd, (data) => {
  const card = createCard(data)
  const cardElement = card.render()
  cardList.dataItem(cardElement)
  addPopupValidator.toggleButtonState()
  popupFormCardAdd.close()
});

popupFormCardAdd.setEventListeners()

//редакт профиль

const userInfo = new UserInfo({
  userNameSelector: '.profile__name',
  userInfoSelector: '.profile__description',
  userAvatarSelector: '.profile__avatar'
});

openEditPopupButton.addEventListener('click', () => {
  popupFormProfilEdit.open()
  const userData = userInfo.getUserInfo();

  popupName.value = userData.name
  popupDescription.value = userData.info

  editPopupValidator.toggleButtonState();
});

const popupFormProfilEdit = new PopupWithForm(popupEdit, (data) => {
  userInfo.setUserInfo(data);
  popupFormProfilEdit.close();
});

popupFormProfilEdit.setEventListeners()

//редакт аватар

openAvatarPopupButton.addEventListener('click', () => {
  popupFormAvatarEdit.open()
  avatarPopupValidator.toggleButtonState()
})

const popupFormAvatarEdit = new PopupWithForm(popupAvatar, (data) => {
  userInfo.setUserAvatar(data);
  avatarPopupValidator.toggleButtonState()
  popupFormAvatarEdit.close()
})

popupFormAvatarEdit.setEventListeners()

cardList.renderItems();