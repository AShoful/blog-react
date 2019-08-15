import React from 'react'
import classes from './Auth.module.css'
import Button from '../UI/Button/'

const Auth = () => 
	<div className = {classes.Auth}>
		<Button>На главную</Button>
		<Button type = 'success'>Отправить</Button>
		<Button type = 'error'>Зарегистрироваться</Button>
		<Button disabled >Auth</Button>
	</div>


export default Auth
	