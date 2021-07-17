export default class FormValidator { 
  constructor(config, formElement) { 
    this._config = config; 
    this._formElement = formElement; 
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector)); 
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector); 
  } 
 
  _checkInputValidity(inputElement) { 
    if (inputElement.validity.valid) { 
      this._hideInputError(inputElement); 
    } else { 
      this._showInputError(inputElement); 
    } 
  } 
 
  _hideInputError(inputElement) { 
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(this._config.inputErrorClass); 
    errorElement.classList.remove(this._config.errorActiveClass); 
    errorElement.textContent = ''; 
  }  
    
  _showInputError(inputElement) { 
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._config.inputErrorClass); 
    errorElement.classList.add(this._config.errorActiveClass); 
    errorElement.textContent = inputElement.validationMessage; 
  } 
 
  _hasInvalidInput(inputList) { 
    return inputList.some(inputElement => !inputElement.validity.valid); 
  } 
 
  toggleButtonState() { 
    if (this._hasInvalidInput(this._inputList)) { 
      this._buttonElement.disabled = true; 
      this._buttonElement.classList.add(this._config.inactiveButtonClass); 
    } else { 
      this._buttonElement.disabled = false; 
      this._buttonElement.classList.remove(this._config.inactiveButtonClass); 
    }  
  } 
   
  _setEventListeners() { 
    this._inputList.forEach((inputElement) => { 
      inputElement.addEventListener('input', () => { 
        this._checkInputValidity(inputElement); 
        this.toggleButtonState(); 
      }); 
    }); 
    this.toggleButtonState(); 
  } 
 
  enableValidation() { 
    this._setEventListeners(); 
  } 
} 