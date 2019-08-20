import axios from '../../axios/'
import {FETCH_ITEMS_START, 
	FETCH_ITEMS_SUCCESS, 
	FETCH_ITEMS_ERROR} from './actionTypes.js'

export function fetchItems () {
	return async dispatch => {
		dispatch(fetchItemsStart())
		const res = await axios.get('/posts')
		try {
			const posts = res.data
			console.log(posts)
			dispatch(fetchItemsSuccess(posts))
		} catch (error){
			dispatch(fetchItemsError(error)) 
		}
	}
}

export function fetchItemsStart(){
	return {
		type: FETCH_ITEMS_START
	}
}

export function fetchItemsSuccess(posts){
	return {
		type: FETCH_ITEMS_SUCCESS,
		payload: posts
	}
}

export function fetchItemsError(error){
	return {
		type: FETCH_ITEMS_ERROR,
		payload: error
	}
}