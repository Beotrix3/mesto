export default class UserInfo {
  constructor(userSelector) {
    this._profileName = userSelector.name;
    this._profileDescription = userSelector.info;
  }

  getUserInfo() {
    this._userData = {
      name: this._profileName.textContent,
      info: this._profileDescription.textContent
    }

    return this._userData
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name
    this._profileDescription.textContent = data.info
  }
}