export default class Card {
  constructor({data, handleCardClick}, templateSelector) { 
    this._name = data.name; 
    this._link = data.link; 
    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
  }
 
  _createElements() { 
    this._element = document
    .querySelector('#element-template')
    .content
    .querySelector('.element')
    .cloneNode(true);

    return this._element
  }

  render() {
    this._createElements();
    this._setEventListeners();

    this._largeImage = this._element.querySelector('.element__image');
    this._largeImage.src = this._link;
    this._largeImage.alt = this._name;

    this._element.querySelector('.element__title').textContent = this._name;

    return this._element
  }

  _handleLikeClick(evt) {
    evt.target.classList.toggle('element__button_active');
  } 
 
  _handleDeleteClick() {
    this._element.remove(); 
  }

  _setEventListeners() {
    this._element
    .querySelector('.element__button')
    .addEventListener('click', (evt) => {
      this._handleLikeClick(evt);
    });
    
    this._element
    .querySelector('.element__delete-button')
    .addEventListener('click', () => {
      this._handleDeleteClick();
    });

    this._element
    .querySelector('.element__image')
    .addEventListener('click', () => {
      this._handleCardClick({
        name: this._name,
        link: this._link
      });
    });
  }
}