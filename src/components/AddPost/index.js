import React from 'react'
import {withRouter} from 'react-router-dom'
import classes from './AddPost.module.css'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'
import Button from '../UI/Button'
import axios from '../../axios/'

class AddPost extends React.Component{

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

    handleSubmit = (e) => {
    	const {post} = this.state
    	e.preventDefault();
    	axios.post('/posts', post)
	      .then(res =>  window.alert("Пост успешно сохранен")) 
		      this.setState({
		        post: {
		          title: '',
		          text: '',
		          imageUrl: ''
		        }
	    	})
    }

	render () {
		const {title, text, imageUrl} = this.state.post
		
		return (
			<form className = {classes.AddPost}  >
			<fieldset className = {classes.fieldset}>
			<legend >Добавить пост</legend>
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
				<Button 
					disabled = {!title || !text} 
					onClick = {this.handleSubmit}
					>
					Отправить
				</Button>
			</div>
			</fieldset>	
			</form>
			)
	}

}	

AddPost.defaultProps = {
	imageUrl : 'https://images.unsplash.com/photo-1541103554737-fe33e243b45c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5070c2f1196983d1b380bee6b3315c83&auto=format&fit=crop&w=1350&q=80'
}

 export default withRouter(AddPost)