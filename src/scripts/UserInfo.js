export default class UserInfo {
  constructor({ name, about }) {
    this._profileName = document.querySelector(name);
    this._profileAboutMe = document.querySelector(about);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileAboutMe.textContent,
    };
  }

  setUserInfo(user) {
    this._profileName.textContent = user.name;
    this._profileAboutMe.textContent = user.about;
  }
}
