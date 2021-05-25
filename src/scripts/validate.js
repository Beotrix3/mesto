function clearInput(formElement, config) {
  const {inputSelector, submitButtonSelector} = config;
  const inputList = formElement.querySelectorAll(inputSelector);
  const buttonElement = formElement.querySelector(submitButtonSelector);
  inputList.forEach((inputElement) => {
    hideInputError (inputElement, formElement, config);
    toggleButtonState(buttonElement, inputList);
    inputElement.value = '';
  });
}

const hideInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorActiveClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorActiveClass);
  errorElement.textContent = '';
}

const showInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorActiveClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorActiveClass);
  errorElement.textContent = inputElement.validationMessage;
}

const checkInputValidity = (formElement, inputElement, config) => {
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config);
  } else {
    showInputError(formElement, inputElement, config);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (buttonElement, inputList) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_disabled');
  } else {
    buttonElement.classList.remove('popup__save-button_disabled');
  }
}

const setEventListeners = (formElement, config) => {
  const { inputSelector, submitButtonSelector, ...restConfig } = config;
  
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, restConfig);
      toggleButtonState(buttonElement, inputList);
    });
  });
  toggleButtonState(buttonElement, inputList);
}

const enableValidation = ({ formSelector, ...restConfig }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, restConfig);
  })
};