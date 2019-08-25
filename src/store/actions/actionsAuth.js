import postApi from '../../api/'
import {AUTH_SUCCESS, AUTH_LOGOUT} from './actionTypes'

export function auth (authData){
	return async dispatch => {
      const response = await postApi.loginUser(authData)
      try {
        const {user:{_id, login}} = response.data
        const expiresIn = 360
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        localStorage.setItem('userId', _id)
        localStorage.setItem('login', login)
        localStorage.setItem('expirationDate', expirationDate)
        window.alert("Авторизация прошла успешно")
        dispatch(authSuccess(login))
        dispatch(autoLogout(expiresIn))
     } catch (e){
        const {error} = response.data 
         window.alert(error)
      }
	}
}

export function authSuccess (token) {
  return {
		type: AUTH_SUCCESS,
		token
	}
}

export function autoLogout(time){
	return dispatch => {
		setTimeout(() => 
			dispatch(logout()
				), time*1000);
	}
}

export function logout(){
    localStorage.removeItem('login')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')

	return {
		type: AUTH_LOGOUT
	}
}

export function autoLogin() {
  return dispatch => {
    const login = localStorage.getItem('login')
    if (!login) {
      dispatch(logout())
    } else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'))
      if (expirationDate <= new Date()) {
        dispatch(logout())
      } else {
        dispatch(authSuccess(login))
        dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
      }
    }
  }
}