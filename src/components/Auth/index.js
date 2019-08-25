
import React from 'react'
import classes from './Auth.module.css'
import {Link} from 'react-router-dom'
import Button from '../UI/Button/'
import Input from '../UI/Input'

function Auth ({auth, isAuth}){
	// state = {
	// 	login: '',
 //        password: '',
	// } 
// const handleChange = (e) => {
 //        const { name, value } = e.target;
 //        this.setState({ [name]: value });
 //    }

	//render(){	

	const [login, setLogin] = React.useState('')
	const [password, setPassword] = React.useState('')
		
	const handleAuth = (e, data) => {
		e.preventDefault()
		auth(data)
		setLogin('')
		setPassword('')
	}
		
		return (
				<form className = {classes.Auth} action="" >
					<fieldset className = {classes.fieldset}> 
					<legend >Авторизация</legend>
					<div className = {classes.wrap}>
					
						<Input 
							label = 'Логин'
							name = 'login'
							value = {login}
							onChange = {(e) => setLogin(e.target.value)}
						/>
						<Input 
							label = 'Пароль'
							type = 'password'
							name = 'password'
							value = {password}
							onChange = {(e) => setPassword(e.target.value)}
						/>
					</div>
					</fieldset>
					<div className = {classes.wrap}>
						<Button 
							disabled = {!login || !password || localStorage.getItem('login')} 
							onClick = {(e) => handleAuth(e, {login, password})}>Войти</Button>
						{isAuth ? 
						<Link to = '/'>
							<Button >На главную</Button>
						</Link>	:
						<Link to = '/regist'>
							<Button >Регистрация</Button>
						</Link>	}
					</div>
				</form>)
	}
// }

export default Auth
	