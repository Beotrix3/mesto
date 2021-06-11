import { openPopup, popupImage, popupLargeImage, popupCaption } from './index.js'

export default class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    
    this._createElements();
    this._setEventListeners();
  }

  _createElements() {
    const elementTemplate = document.querySelector(this._templateSelector).content;
    this._newElement = elementTemplate.querySelector('.element').cloneNode(true);

    this._elementDeleteButton = this._newElement.querySelector('.element__delete-button');
    this._likeButton = this._newElement.querySelector('.element__button');
    this._largeImage = this._newElement.querySelector('.element__image');

    this._newElement.querySelector('.element__title').textContent = this._name;
    this._largeImage.alt = this._name;
    this._largeImage.src = this._link;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick());
    this._elementDeleteButton.addEventListener('click', () => this._handleDeleteClick());
    this._largeImage.addEventListener('click', () => this._handleLargeImage());
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('element__button_active');
  }

  _handleDeleteClick() {
    this._newElement.remove();
  }

  _handleLargeImage() {
    openPopup(popupImage);
    popupLargeImage.src = this._link;
    popupLargeImage.alt = this._name;
    popupCaption.textContent = this._name;
  }

  render() {
    return this._newElement;
  }
}