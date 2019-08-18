const RegistValidation = (data) => {
  const {firstName, login, password, passwordConfirm} = data
  
if (!login || !password || !passwordConfirm || !firstName ) {
        return  'Все поля должны быть заполнены!'
    } else if (!/^[a-zA-Z0-9]+$/.test(login)) {
          return 'В поле Логин используйте только латинские буквы и цифры!'
                 
    } else if (login.length < 3 || login.length > 16) {
        return 'Длина Логина от 3 до 16 символов!'
            
    } else if (password.length < 1) {
        return 'Минимальная длина пароля 1 символов!'
            
    } else if (password !== passwordConfirm) {
        return  'Пароли не совпадают!'
            
    }else {
      return null
    }
  }

  export default RegistValidation