import React, {useState}  from 'react'
import classes from './AddPost.module.css'
import Input from '../UI/Input'
import Textarea from '../UI/Textarea'
import Button from '../UI/Button'

// class AddPost extends React.Component{

// 	init = (data, item) => data ? data[item] : ''

// 	state = {
// 		post:{
// 			title: this.init(this.props.changePost, 'title'),
// 		    text: this.init(this.props.changePost, 'text'),
// 		    imageUrl: this.init(this.props.changePost, 'imageUrl')
// 		}
// 	}
	
// 	handleChange = (e) => {
//       e.preventDefault();
//       let {...post} = this.state.post;
//         post[e.target.name] = e.target.value;
//         this.setState({
//             post
//         });
//     }

//     handleGoBack = (e) => {
//     	e.preventDefault();
//     	this.props.goBack()
//     }

//     handleSubmite = (e) => {
//     	e.preventDefault()
//     	const { post } = this.state
//     	post.owner = localStorage.getItem('userId')
//     	const { postId, changePost } = this.props
//     	this.props.handleSubmit(post, postId) 
// 	      if (!changePost){
//       	      this.setState({
//       	      	post:{
//       				title: '',
//       			    text: '',
//       			    imageUrl: ''
//       			}
//       	    })
//       	  }
// 	}

// 	render () {
// 		const {title, text, imageUrl} = this.state.post
// 		const { changePost } = this.props
	     	  
	
// 		return (
// 			<form className = {classes.AddPost}  >
// 			<fieldset className = {classes.fieldset}>
// 			<legend >{changePost ? 'Редактировать пост' : 'Добавить пост'}</legend>
// 			<div className = {classes.wrap}>
// 				<Input
// 					size = 'middle'
// 					name = 'title'
// 					label = 'Заголовок поста'
// 					value = {title}
// 					onChange = {this.handleChange}
// 				/>
// 				<Input
// 					size = 'middle'
// 					name = 'imageUrl'
// 					label = 'Url изображения'
// 					value = {imageUrl}
// 					onChange = {this.handleChange}
// 				/>
// 				<Textarea 
// 					value = {text}
// 					label = 'Введите текст поста'
// 					name = 'text'
// 					onChange = {this.handleChange}

// 				/>
// 			</div>
// 			<div className = {classes.wrap}>
// 				<Button onClick = {this.handleGoBack}>Назад</Button>
// 				<Button disabled = {!title || !text} 
// 				onClick = {this.handleSubmite}>Сохранить</Button>
// 			</div>
// 			</fieldset>	
// 			</form>
// 			)
// 	}
// }


const AddPost = ({changePost, handleSubmit, goBack, postId}) => {
	
	const [text, setText] = useState(changePost ? changePost.text : '')
	const [title, setTitle] = useState(changePost ? changePost.title : '')
	const [imageUrl, setImageUrl] = useState(changePost ? changePost.imageUrl : '')

	const handleGoBack = (e) => {
    	e.preventDefault();
    	goBack()
    }

    const submite = (e) => {
    	e.preventDefault()
    	const post = {title, text, imageUrl}
    	post.owner = localStorage.getItem('userId')
    	handleSubmit(post, postId) 
	    if(!changePost) {
	    	setText('')
	    	setTitle('')
	    	setImageUrl('')
	    }
	}

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
					onChange = {(e) => setTitle(e.target.value)}
				/>
				<Input
					size = 'middle'
					name = 'imageUrl'
					label = 'Url изображения'
					value = {imageUrl}
					onChange = {(e) => setImageUrl(e.target.value)}
				/>
				<Textarea 
					value = {text}
					label = 'Введите текст поста'
					name = 'text'
					onChange = {(e) => setText(e.target.value)}

				/>
			</div>
			<div className = {classes.wrap}>
				<Button onClick = {handleGoBack}>Назад</Button>
				<Button disabled = {!title || !text} 
				onClick = {submite}>Сохранить</Button>
			</div>
			</fieldset>	
			</form>
		)
}




 export default AddPost