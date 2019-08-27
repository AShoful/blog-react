import postApi from '../../api/'
import {FETCH_ITEMS_START,
	FETCH_ITEM_SUCCESS,
	FETCH_ITEM_REMOVE, 
	FETCH_ITEMS_SUCCESS, 
	FETCH_ITEMS_ERROR,
	PAGE_CHANGE} from './actionTypes.js'

export function fetchItems (page) {
	return async dispatch => {
		dispatch(fetchItemsStart())
		const res = await postApi.get(page)
		try {
			const data = res.data
			dispatch(fetchItemsSuccess(data))
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

export function fetchItemsSuccess(data){
	return {
		type: FETCH_ITEMS_SUCCESS,
		posts: data.posts,
		totalPosts: data.totalPosts,
		limit: data.limit
	}
}

export function fetchItemsError(error){
	return {
		type: FETCH_ITEMS_ERROR,
		payload: error
	}
}

export function fetchItem (id) {
	return async dispatch => {
		dispatch(fetchItemsStart())
		const res = await postApi.getItem(id)
		try {
			const post = res.data
			dispatch(fetchItemSuccess(post))
		} catch (error){
			dispatch(fetchItemsError(error)) 
		}
	}
}

export function fetchItemSuccess(post){
	return {
		type: FETCH_ITEM_SUCCESS,
		payload: post
	}
}

export function fetchRemoveItem (id) {
    if (global.confirm('Вы действительно хотите удалить пост?')) {
      return async dispatch => {
      	await postApi.remove(id)	
      	try {
      		global.alert('Пост успешно удален!')
      		dispatch(removeItem(id))
      	}
      	catch(error){
      		dispatch(fetchItemsError(error)) 
      	}
  }
}
}  

export function removeItem (id) {
	return ({
    type: FETCH_ITEM_REMOVE,
    payload: id,
  })
}

export function postsPageChahge (page) {
	return ({
		type: PAGE_CHANGE,
		payload: page
	})
}