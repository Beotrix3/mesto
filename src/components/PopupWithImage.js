import Popup from "./Popup.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupLargeImage = this._popup.querySelector('.popup__image')
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open(values) {
    super.open();
    this._popupLargeImage.src = values.link;
    this._popupLargeImage.alt = values.name;
    this._popupCaption.textContent = values.name;
  }
}