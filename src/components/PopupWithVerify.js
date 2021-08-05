import Popup from './Popup.js'

export default class PopupWithVerify extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupContainer = this._popup.querySelector('.popup__container')
    
    this._popupSaveButton = this._popupContainer.querySelector('.popup__save-button')
    this._popupButton = this._popupSaveButton.textContent
  }

  setEventListeners() {
    super.setEventListeners()

    this._popupContainer.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._handleCallbackSubmit()  
    });
  }

  setSubmitAction(action) {
    this._handleCallbackSubmit = action
  }

  loadingProcess(isLoading) {
    if(isLoading) {
      this._popupSaveButton.textContent = 'Сохранение...'
    } else {
      this._popupSaveButton.textContent = this._popupButton
    }
  }
}