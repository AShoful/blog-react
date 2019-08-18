import React from 'react'
import classes from './Registration.module.css'
import { Link } from 'react-router-dom'
import RegistValidation from './RegistValidation.js'
import Button from '../UI/Button/'
import Input from '../UI/Input'

class Registration extends React.Component{
	state = {
		user: {
                firstName: '',
                login: '',
                password: '',
                passwordConfirm: ''
           },
        touched: false   
	} 

	handleChange = (e) => {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            },
            touched: true
        });
    }

	render(){
		const {user:{firstName, login, password, passwordConfirm}, touched} = this.state
		const warning = RegistValidation(this.state.user)
		return (
				<form className = {classes.Registration} action="" method="post">
					<fieldset className = {classes.fieldset}> 
					<legend >Регистрация</legend>
					<div className = {classes.wrap}>
						<Input 
							label = 'Имя'
							name = 'firstName'
							size = 'middle'
							value = {firstName}
							onChange = {this.handleChange}
						/>
						<Input 
							label = 'Логин'
							name = 'login'
							size = 'middle'
							value = {login}
							onChange = {this.handleChange}
						/>
						<Input 
							label = 'Пароль'
							type = 'password'
							name = 'password'
							size = 'middle'
							value = {password}
							onChange = {this.handleChange}
						/>
						<Input 
							label = 'Повторите пароль'
							type = 'password'
							name = 'passwordConfirm'
							size = 'middle'
							value = {passwordConfirm}
							onChange = {this.handleChange}
						/>
					</div>
					{touched ? <span>{warning}</span> : null}
					</fieldset>
					<div className = {classes.wrap}>
						<Button 
							disabled = {!!warning}>
							Зарегистрироваться
						</Button>
						<Link to ='/auth'>
							<Button >Авторизация</Button>
						</Link>	
					</div>
				</form>
		)}
}

export default Registration
	