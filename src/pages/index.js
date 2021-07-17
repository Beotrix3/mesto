import Card from '../components/Card.js' 
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
 
import {
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
} from '../utils/constants.js'

const editPopupValidator = new FormValidator (config, formElement);  
editPopupValidator.enableValidation(); 
 
const addPopupValidator = new FormValidator (config, formAddElement); 
addPopupValidator.enableValidation();

const userInfo = new UserInfo({
  name: profileName,
  info: profileDescription
});

const imagePopup = new PopupWithImage(popupImage)
imagePopup.setEventListeners()

function createCard(data) {
  const card = new Card({
    data,
    handleCardClick: () => imagePopup.open(data)
  }, elements);
  
  return card
}

//initialCards.forEach((element) => { 
  //elements.append(createCard(element)); 
//});

const cardList = new Section({
  items: initialCards,
  renderer: item => {
    const card = createCard(item)
    const cardElement = card.render();
    cardList.addItem(cardElement)
  }
}, elements);

const popupFormCardAdd = new PopupWithForm(popupAdd, data => {
  const card = createCard(data)
  const cardElement = card.render()
  cardList.addItem(cardElement)
  addPopupValidator.toggleButtonState()
  popupFormCardAdd.close()
});

popupFormCardAdd.setEventListeners()

const popupFormProfilEdit = new PopupWithForm(popupEdit, (data) => {
  userInfo.setUserInfo(data)
  popupFormProfilEdit.close()
});

popupFormProfilEdit.setEventListeners()

openAddPopupButton.addEventListener('click', () => {
  addPopupValidator.toggleButtonState()
  popupFormCardAdd.open()
});

openEditPopupButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();

  popupName.value = userData.name
  popupDescription.value = userData.info

  editPopupValidator.toggleButtonState();

  //

  popupFormProfilEdit.open()
});
