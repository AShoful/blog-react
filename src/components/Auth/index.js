import React from 'react'
import classes from './Auth.module.css'
import {Link} from 'react-router-dom'
import Button from '../UI/Button/'
import Input from '../UI/Input'

class Auth extends React.Component{
	state = {
		login: '',
        password: '',
	} 

	handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

	render(){
		const {login, password} = this.state

		return (
				<form className = {classes.Auth} action="" >
					<fieldset className = {classes.fieldset}> 
					<legend >Авторизация</legend>
					<div className = {classes.wrap}>
					
						<Input 
							label = 'Логин'
							name = 'login'
							value = {login}
							onChange = {this.handleChange}
						/>
						<Input 
							label = 'Пароль'
							type = 'password'
							name = 'password'
							value = {password}
							onChange = {this.handleChange}
						/>
					</div>
					</fieldset>
					<div className = {classes.wrap}>
						<Button disabled = {!login || !password}>Войти</Button>
						<Link to = '/registr'>
							<Button >Регистрация</Button>
						</Link>	
					</div>
				</form>)}
}

export default Auth
	