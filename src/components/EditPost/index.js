import React from 'react'
import {withRouter} from 'react-router-dom'
import classes from './EditPost.module.css'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'
import Button from '../UI/Button'

class EditPost extends React.Component{

	state = {
		post:{
			title: '',
		    text: '',
		    imageUrl: ''
		}
	}

	handleChange = (e) => {
      e.preventDefault();
      let {...post} = this.state.post;
        post[e.target.name] = e.target.value;
        this.setState({
            post
        });
    }

    handleGoBack = (e) => {
    	e.preventDefault();
    	this.props.history.goBack()
    }

	render () {
		const {title, text, imageUrl} = this.state.post

		return (
			<form className = {classes.EditPost}  >
			<fieldset className = {classes.fieldset}>
			<legend >Редактирование поста</legend>
			<div className = {classes.wrap}>
				<Input
					size = 'middle'
					name = 'title'
					label = 'Заголовок поста'
					value = {title}
					onChange = {this.handleChange}
				/>
				<Input
					size = 'middle'
					name = 'imageUrl'
					label = 'Url изображения'
					value = {imageUrl}
					onChange = {this.handleChange}
				/>
				<Textarea 
					value = {text}
					label = 'Введите текст поста'
					name = 'text'
					onChange = {this.handleChange}

				/>
			</div>
			<div className = {classes.wrap}>
				<Button onClick = {this.handleGoBack}>Назад</Button>
				<Button disabled = {!title || !text}>Изменить</Button>
			</div>
			</fieldset>	
			</form>
			)
	}

}	

export default withRouter(EditPost)