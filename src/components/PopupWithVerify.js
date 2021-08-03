import Popup from './Popup.js'

export default class PopupWithVerify extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupContainer = this._popup.querySelector('.popup__container')
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
}