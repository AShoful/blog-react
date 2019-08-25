import React, {useState} from 'react'
import classes from './Registration.module.css'
import { Link } from 'react-router-dom'
import RegistValidation from './RegistValidation.js'
import postApi from '../../api/'
import Button from '../UI/Button/'
import Input from '../UI/Input'

const Registration = () => {

	const [firstName, setFirstName] = useState('')
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [touched, setTouched] = useState(false) 

	 
	const warning = RegistValidation({firstName, login, password, passwordConfirm})

	const handleSubmit =  async (data, e) => {
        e.preventDefault();
        
        const res = await postApi.postUser(data)
          try {
              const { error, ok } = res.data
              if(ok){
                  window.alert("Регистрация прошла успешно")
                  setLogin('')
                  setPassword('')
                  setFirstName('')
                  setPasswordConfirm('')
                  setTouched(false)
              } else {
                  window.alert(error)
              }
          }
           catch (err){console.log(err)}
    }


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
							onChange = {e => {setFirstName(e.target.value); setTouched(true)}}
						/>
						<Input 
							label = 'Логин'
							name = 'login'
							size = 'middle'
							value = {login}
							onChange = {(e) => {setLogin(e.target.value); setTouched(true)}}
						/>
						<Input 
							label = 'Пароль'
							type = 'password'
							name = 'password'
							size = 'middle'
							value = {password}
							onChange = {(e) => {setPassword(e.target.value); setTouched(true)}}
						/>
						<Input 
							label = 'Повторите пароль'
							type = 'password'
							name = 'passwordConfirm'
							size = 'middle'
							value = {passwordConfirm}
							onChange = {(e) => {setPasswordConfirm(e.target.value); setTouched(true)}}
						/>
					</div>
					{touched ? <span>{warning}</span> : null}
					</fieldset>
					<div className = {classes.wrap}>
						<Button 
							disabled = {!!warning}
							onClick = {(e) => handleSubmit({login, firstName, password}, e) } >
							Зарегистрироваться
						</Button>
						<Link to ='/auth'>
							<Button >Авторизация</Button>
						</Link>	
					</div>
				</form>
		)
	}

// class Registration extends React.Component{
// 	state = {
// 		user: {
//                 firstName: '',
//                 login: '',
//                 password: '',
//                 passwordConfirm: ''
//            },
//         touched: false   
// 	} 

// 	handleChange = (e) => {
//         const { name, value } = e.target;
//         const { user } = this.state;
//         this.setState({
//             user: {
//                 ...user,
//                 [name]: value
//             },
//             touched: true
//         });
//     }

//     handleSubmit =  async (data, e) => {
//         e.preventDefault();
        
//         const res = await postApi.postUser(data)
//           try {
//               const { error, ok } = res.data
//               if(ok){
//                   window.alert("Регистрация прошла успешно")
//                   this.setState({
//                     user: {
//                         firstName: '',
//                         login: '',
//                         password: '',
//                         passwordConfirm: ''
//                     }
//                 })
//               } else {
//                   window.alert(error)
//               }
//           }
//            catch (err){console.log(err)}
//     }

// 	render(){
// 		const {user:{firstName, login, password, passwordConfirm}, touched} = this.state
// 		const warning = RegistValidation(this.state.user)
// 		return (
// 				<form className = {classes.Registration} action="" method="post">
// 					<fieldset className = {classes.fieldset}> 
// 					<legend >Регистрация</legend>
// 					<div className = {classes.wrap}>
// 						<Input 
// 							label = 'Имя'
// 							name = 'firstName'
// 							size = 'middle'
// 							value = {firstName}
// 							onChange = {this.handleChange}
// 						/>
// 						<Input 
// 							label = 'Логин'
// 							name = 'login'
// 							size = 'middle'
// 							value = {login}
// 							onChange = {this.handleChange}
// 						/>
// 						<Input 
// 							label = 'Пароль'
// 							type = 'password'
// 							name = 'password'
// 							size = 'middle'
// 							value = {password}
// 							onChange = {this.handleChange}
// 						/>
// 						<Input 
// 							label = 'Повторите пароль'
// 							type = 'password'
// 							name = 'passwordConfirm'
// 							size = 'middle'
// 							value = {passwordConfirm}
// 							onChange = {this.handleChange}
// 						/>
// 					</div>
// 					{touched ? <span>{warning}</span> : null}
// 					</fieldset>
// 					<div className = {classes.wrap}>
// 						<Button 
// 							disabled = {!!warning}
// 							onClick = {this.handleSubmit.bind(this, {login, firstName, password})}>
// 							Зарегистрироваться
// 						</Button>
// 						<Link to ='/auth'>
// 							<Button >Авторизация</Button>
// 						</Link>	
// 					</div>
// 				</form>
// 		)}
// }

export default Registration
	