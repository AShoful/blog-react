import React from 'react'
import classes from './AddPost.module.css'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'
import Button from '../UI/Button'

class AddPost extends React.Component{

	init = (data, item) => data ? data[item] : ''

	state = {
		post:{
			title: this.init(this.props.changePost, 'title'),
		    text: this.init(this.props.changePost, 'text'),
		    imageUrl: this.init(this.props.changePost, 'imageUrl')
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
    	this.props.goBack()
    }

    handleSubmite = (e) => {
    	e.preventDefault()
    	const { post } = this.state
    	post.owner = localStorage.getItem('userId')
    	const { postId, changePost } = this.props
    	this.props.handleSubmit(post, postId) 
	      if (!changePost){
      	      this.setState({
      	      	post:{
      				title: '',
      			    text: '',
      			    imageUrl: ''
      			}
      	    })
      	  }
	}

	render () {
		const {title, text, imageUrl} = this.state.post
		const { changePost } = this.props
		return (
			<form className = {classes.AddPost}  >
			<fieldset className = {classes.fieldset}>
			<legend >{changePost ? 'Редактировать пост' : 'Добавить пост'}</legend>
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
				<Button disabled = {!title || !text} 
				onClick = {this.handleSubmite}>Сохранить</Button>
			</div>
			</fieldset>	
			</form>
			)
	}

}	



 export default AddPost