const API = process.env.REACT_APP_HOTS_DEVELOPMENT_WEB
const ENDPOINT = process.env.REACT_APP_ENDPOINT_LOGIN

export default function login({ username, password }) {
  return fetch(`${API}/${ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then((res) => {
      if (!res.ok) throw new Error('La respuesta es NO ok')
      return res.json()
    })
    .then((res) => res.accessToken)
}
