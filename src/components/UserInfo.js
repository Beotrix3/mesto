export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileDescription = document.querySelector(userInfoSelector);
  }

  getUserInfo() {
    const userData = {
      name: this._profileName.textContent,
      info: this._profileDescription.textContent
    }

    return userData
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name
    this._profileDescription.textContent = data.info
  }
}