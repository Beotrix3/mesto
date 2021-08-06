export default class Card {
  constructor({data, handleCardClick, handleVerifyDelete, handleLikeClick}, templateSelector, api, guestId) { 
    this._name = data.name; 
    this._link = data.link;
    this._likes = data.likes;

    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._handleVerifyDelete = handleVerifyDelete;
    this._handleLikeClick = handleLikeClick;

    this._api = api;
    this._id = data._id;
    this._creatorId = data.owner._id;
    this._guestId = guestId; 
  }
 
  _createElements() { 
    this._element = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
  }

  render() {
    this._createElements();
    this._setEventListeners();

    this._largeImage = this._element.querySelector('.element__image');
    this._largeImage.src = this._link;
    this._largeImage.alt = this._name;

    this._element.querySelector('.element__title').textContent = this._name;

    this._element.querySelector('.element__like-number').textContent = this._likes.length;

    if(!(this._creatorId === this._guestId)) {
      this._element.querySelector('.element__delete-button').style.display = 'none'
    }

    if(this._likes.find((obj) => this._guestId === obj._id)) {
      this._element.querySelector('.element__button').classList.add('element__button_active')
    }

    return this._element
  }

  handleLikeCard() {
    const likeButton = this._element.querySelector('.element__button')
    const likeNumber = this._element.querySelector('.element__like-number')

    if(!(likeButton.classList.contains('element__button_active'))) {
      this._api.like(this._id)
        .then((data) => {
          likeButton.classList.add('element__button_active')
          likeNumber.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this._api.unlike(this._id)
        .then((data) => {
          likeButton.classList.remove('element__button_active')
          likeNumber.textContent = data.likes.length
        })
        .catch((err) => {
          console.log(err)
        })
    }
  } 
 
  handleDeleteClick() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element
    .querySelector('.element__button')
    .addEventListener('click', () => {
      this._handleLikeClick();
    });
    
    this._element
    .querySelector('.element__delete-button')
    .addEventListener('click', () => {
      this._handleVerifyDelete();
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