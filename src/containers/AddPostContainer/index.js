import React from 'react'
import postApi from '../../api/'
import AddPost from '../../components/AddPost/'

const AddPostContainer  = (props) =>{

	const handleSubmit = async (data) => {
		await postApi.post(data)
		try {
			window.alert('Пост сохранен в базе')
		} 
		catch(e){
			window.alert('База данных недоступна, попробуйте позже')
		}
	}
		 	
		return <AddPost 
			goBack = {props.history.goBack}
			handleSubmit = {handleSubmit}
		/>
}	


 export default AddPostContainer