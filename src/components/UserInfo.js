export default class UserInfo {
  constructor(userSelector) {
    this._profileName = document.querySelector(userSelector.name);
    this._profileDescription = document.querySelector(userSelector.about);
    this._profileAvatar = document.querySelector(userSelector.avatar);
  }

  getUserInfo() {
    this._userData = {
      name: this._profileName.textContent,
      about: this._profileDescription.textContent
    }

    return this._userData
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name
    this._profileDescription.textContent = data.about

    this.setUserAvatar(data)
  }

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar
  }
}