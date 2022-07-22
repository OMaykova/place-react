class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _getResponseData(res) {
    return (!res.ok) ? 
      Promise.reject(`Ошибка: ${res.status} ${res.statusText}`) :
      res.json();
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include', // теперь куки посылаются вместе с запросом
    })
    .then(this._getResponseData)
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      credentials: 'include', // теперь куки посылаются вместе с запросом
    })
    .then(this._getResponseData)
  }
  editProfile(name, description) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include', // теперь куки посылаются вместе с запросом
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description,
      })
    })
    .then(this._getResponseData)
  }
  addUserCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      credentials: 'include', // теперь куки посылаются вместе с запросом
      headers: this._headers,
      body: JSON.stringify({
        name: data.caption,
        link: data.link
      })
    })
    .then(this._getResponseData)
  }
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      credentials: 'include', // теперь куки посылаются вместе с запросом
      headers: this._headers,
    })
    .then(this._getResponseData)
  }
  setLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      credentials: 'include', // теперь куки посылаются вместе с запросом
      headers: this._headers,
    })
    .then(this._getResponseData)
  }
  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      credentials: 'include', // теперь куки посылаются вместе с запросом
      headers: this._headers,
    })
    .then(this._getResponseData)
  }
  changeAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include', // теперь куки посылаются вместе с запросом
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(this._getResponseData)
  }
  }
  export const api = new Api({
  //   baseUrl: 'http://localhost:3001',
    baseUrl: `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`,
    headers: {
      // authorization: 'ae237eb9-5aba-4050-8c86-8e74ad63731d', //для авторизации через токен
      'Content-Type': 'application/json'
    }
  })
