export default class Api {
  constructor(options) {
    this.url = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addCard(data) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  editUserInfo(data) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  removeLike(cardId) {
    return fetch(`${this.url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  editAvatar(url) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  removeCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}
