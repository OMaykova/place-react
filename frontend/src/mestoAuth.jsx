export const BASE_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3001'}`;
// export const BASE_URL = 'http://localhost:3001';
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
      .then((err) => {
        console.log(err);
      });
};

export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
			'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
		
    body: JSON.stringify({
			"password": password,
      "email": email 
		})
  })
  .then(checkResponse)
};
export const authorize = (password, email) => {

  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
			"password": password,
      "email": email
		})
  })
  .then(checkResponse)
};
export const getContent = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`,
    }
  })
  .then(checkResponse)
};
export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};