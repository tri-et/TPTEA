import axios from 'axios'
import {Notify} from 'quasar'

export const _ax = axios.create({
  timeout: 20000,
  // remove the abundant "data" key from grahql response
  transformResponse: axios.defaults.transformResponse.concat(data => {
    if (Object.keys(data).length === 1) return data.data
    else return data // keep all data properties
  }),
})

// get auth token, to make sure all _get _post require got auth-token attached
let getToken = () => {
  if (localStorage.getItem('auth-token')) {
    return localStorage.getItem('auth-token').slice(0, -1)
  }
  return null
}
let setToken = () => {
  let token = getToken()
  if (token) {
    _ax.defaults.headers.common['Authorization'] = 'Bearer ' + token
  } else {
    delete _ax.defaults.headers.common['Authorization']
  }
}

export const _get = query => {
  setToken()
  return _ax.get('/api', {
    params: {
      query: query,
    },
  })
}

export const _post = (input, query) => {
  setToken()
  return _ax({
    method: 'post',
    url: '/api',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({query, variables: {input}}),
  })
}

export const _alert = (message, type) => {
  Notify.create({
    message,
    type,
    timeout: 2000,
  })
}

export const _procAlert = (data, successMessage) => {
  if (data.errors) _alert(data.errors[0].message, 'warning')
  else if (successMessage) {
    _alert(successMessage === true ? 'Successfully!' : successMessage, 'positive')
  }
}

export const _procError = err => {
  if (err.response) _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
  else _alert(`Code: ${err.message}`, 'negative')
}

export function isAuth() {
  return !!localStorage.getItem('auth-token')
}

export function getUserType() {
  let token = localStorage.getItem('auth-token')
  return token ? token.substr(token.length - 1) : null
}

export async function getTokenFB() {
  let popup = window.open(
    'https://www.facebook.com/v3.2/dialog/oauth?client_id=253998778647702&scope=email&display=popup&response_type=token,granted_scopes&auth_type=rerequest&redirect_uri=' +
      window.location.origin +
      '/fb-login-receiver.html',
    'Facebook Login',
    'width=500,height=500'
  )
  let token = new Promise((resolve, reject) => {
    var finished = false
    let listener = e => {
      finished = true
      let url = new URL(e.data)
      let hash = url.hash.substring(1)
      let splitted = hash.split('&')
      let dct = {}
      for (let s of splitted) {
        var spltd = s.split('=')
        dct[spltd[0]] = spltd[1]
      }
      if (dct['granted_scopes'].indexOf('email') < 0) {
        reject(new Error('Email required'))
        return
      }
      resolve(dct['access_token'])
    }
    addEventListener('message', listener)
    let intervalChecker = setInterval(() => {
      if (popup.closed) {
        clearInterval(intervalChecker)
        removeEventListener('message', listener)
        if (!finished) {
          reject(new Error('Login canceled'))
        }
      }
    }, 1000)
  })
  return token
}
