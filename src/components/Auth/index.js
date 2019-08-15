import React from 'react'
import classes from './Auth.module.css'
import Button from '../UI/Button/'
import Input from '../UI/Input'

const Auth = () => 
	<React.Fragment>
		<div className = {classes.Auth}>
			<Button>На главную</Button>
			<Button type = 'success'>Отправить</Button>
			<Button type = 'error'>Зарегистрироваться</Button>
			<Button disabled >Auth</Button>
		</div>
		<div className = {classes.Auth}>
			<Input 
				label = 'Пароль'
				type = 'text'
				size = 'middle'
			/>
			<Input 
				label = 'Пароль'
				type = 'text'
				size = 'middle'
			/>
			<Input 
				label = 'Пароль'
				type = 'text'
				size = 'big'
			/>
		</div>
	</React.Fragment>


export default Auth
	