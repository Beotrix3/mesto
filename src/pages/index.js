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
  popupEditAvatarSelector,
  popupVerifyDeleteSelector,
  popupEditProfileSelector,
  popupElementAddSelector,
  elementsSelector,
  popupImageSelector,
  openEditPopupButton,
  openAddPopupButton,
  formElement,
  popupName,
  popupDescription,
  formAddElement,
  config,
  openAvatarPopupButton,
  formAvatarElement,
  profileNameSelector,
  profileAboutSelector,
  profileAvatarSelector,
  templateSelector
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

const imagePopup = new PopupWithImage(popupImageSelector)
imagePopup.setEventListeners()

const verifyPopup = new PopupWithVerify(popupVerifyDeleteSelector)
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
  }, templateSelector, api, guestId)
  
  return card
}

const cardList = new Section({
  renderer: item => {
    const card = createCard(item)
    const cardElement = card.render();
    cardList.addItem(cardElement)
  }
}, elementsSelector);

//создание новой карточки

openAddPopupButton.addEventListener('click', () => {
  addPopupValidator.toggleButtonState()
  popupFormCardAdd.open()
});

const popupFormCardAdd = new PopupWithForm(popupElementAddSelector, (formValues) => {
  popupFormCardAdd.doLoading(true)
  api.addUserCard(formValues)
    .then((data) => {
      const card = createCard(data)
      const cardElement = card.render()
      cardList.dataItem(cardElement)
      popupFormCardAdd.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupFormCardAdd.doLoading(false))
})

popupFormCardAdd.setEventListeners()

//редакт профиль

const userInfo = new UserInfo({
  name: profileNameSelector,
  about: profileAboutSelector,
  avatar: profileAvatarSelector
});

openEditPopupButton.addEventListener('click', () => {
  popupFormProfilEdit.open()
  const userData = userInfo.getUserInfo();

  popupName.value = userData.name
  popupDescription.value = userData.about

  editPopupValidator.toggleButtonState();
});

const popupFormProfilEdit = new PopupWithForm(popupEditProfileSelector, (formValues) => {
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

const popupFormAvatarEdit = new PopupWithForm(popupEditAvatarSelector, (formValues) => {
  popupFormAvatarEdit.doLoading(true)
  api.handleUserAvatar(formValues)
    .then((data) => {
      userInfo.setUserAvatar(data);
      popupFormAvatarEdit.close()
    })
    .catch((err) => console.log(err))
    .finally(() => popupFormAvatarEdit.doLoading(false))
})

popupFormAvatarEdit.setEventListeners()

let guestId

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(( [cards, userData] ) => {
    userInfo.setUserInfo(userData)
    guestId = userData._id
    cardList.renderItems(cards)
  })
  .catch((err) => console.log(err))