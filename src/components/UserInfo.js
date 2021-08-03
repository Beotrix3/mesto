export default class UserInfo {
  constructor({ userNameSelector, userInfoSelector, userAvatarSelector }) {
    this._profileName = document.querySelector(userNameSelector);
    this._profileDescription = document.querySelector(userInfoSelector);
    this._profileAvatar = document.querySelector(userAvatarSelector);
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
    
    this.setUserAvatar(data)
  }

  setUserAvatar(data) {
    this._profileAvatar.src = data.avatar
  }
}