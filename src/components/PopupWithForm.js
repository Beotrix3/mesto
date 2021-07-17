import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector)
    this._callbackSubmit = callbackSubmit

    this._popupContainer = this._popup.querySelector('.popup__container')
    this._inputList = this._popupContainer.querySelectorAll('.popup__info')
  }

  _getInputValues() {
    this._formValues = {}
    this._inputList.forEach(inputElement => {
      this._formValues[inputElement.name] = inputElement.value
    });

    return this._formValues
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupContainer.addEventListener('submit', evt => {
      evt.preventDefault();
      this._callbackSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._popupContainer.reset();
  }
}