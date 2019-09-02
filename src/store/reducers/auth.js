import{AUTH_SUCCESS, AUTH_LOGOUT} from '../actions/actionTypes'
const initialState = {
	login: null
}

export default function authReducer(state = initialState, action){
	switch (action.type){
	case AUTH_SUCCESS:
		return{
		...state, login: action.login
	}	
	case AUTH_LOGOUT:
		return{
		...state, login: null
	}

		default :
		return state
	}
}