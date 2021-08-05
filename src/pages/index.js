import './index.css'

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithVerify from '../components/PopupWithVerify.js';
import Api from '../components/Api.js';
 
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
  openAvatarPopupButton,
  formAvatarElement,
  popupAvatar,
  popupVerify
} from '../utils/constants.js'

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    "authorization": '442d7c15-d132-449b-929f-8694ae0bf753',
    'Content-Type': 'application/json'
  }
})

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
    handleLikeClick: () => card.handleLikeCard(),
    handleVerifyDelete: () => {
      verifyPopup.setSubmitAction(() => {
        verifyPopup.loadingProcess(true)
        api.delete(data._id)
          .then(() => {
            card.handleDeleteClick()
            verifyPopup.close()
          })
          .catch((err) => console.log(err))
          .finally(() => verifyPopup.loadingProcess(false))
      })
      verifyPopup.open()
    }
  }, elements, api, guestId)
  
  return card
}

const cardList = new Section({
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

const popupFormCardAdd = new PopupWithForm(popupAdd, (formValues) => {
  popupFormCardAdd.doLoading(true)
  api.addUserCard(formValues)
    .then((data) => {
      const card = createCard(data)
      const cardElement = card.render()
      cardList.dataItem(cardElement)
      addPopupValidator.toggleButtonState()
      popupFormCardAdd.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupFormCardAdd.doLoading(true))
})

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
  popupDescription.value = userData.about

  editPopupValidator.toggleButtonState();
});

const popupFormProfilEdit = new PopupWithForm(popupEdit, (formValues) => {
  popupFormProfilEdit.doLoading(true)
  api.setUserInfoApi(formValues)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupFormProfilEdit.close();
    })
    .catch((err) => console.log(err))
    .finally(() => popupFormProfilEdit.doLoading(false))
})

popupFormProfilEdit.setEventListeners()

//редакт аватар

openAvatarPopupButton.addEventListener('click', () => {
  popupFormAvatarEdit.open()
  avatarPopupValidator.toggleButtonState()
})

const popupFormAvatarEdit = new PopupWithForm(popupAvatar, (formValues) => {
  popupFormAvatarEdit.doLoading(true)
  api.handleUserAvatar(formValues)
    .then((data) => {
      userInfo.setUserAvatar(data);
      avatarPopupValidator.toggleButtonState()
      popupFormAvatarEdit.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupFormAvatarEdit.doLoading(false))
})

popupFormAvatarEdit.setEventListeners()

let guestId

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(( [cards, userData] ) => {
    console.log(userData)
    userInfo.setUserInfo(userData)
    console.log(userData)
    guestId = userData._id
    cardList.renderItems(cards)
  })
  .catch((err) => console.log(err))