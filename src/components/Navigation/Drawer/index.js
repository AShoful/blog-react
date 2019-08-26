import React from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop'
 
const Drawer = ({isOpen, onClose, isAuth}) => {

  const renderLinks = (Links) => {
      return Links.map((link, index) =>
          <li key = {index}>
             <NavLink 
              to = {link.to}
              exact = {link.exact}
              onClick = {onClose} 
              activeClassName={classes.active}>
                {link.label}
             </NavLink>
          </li>
      )
  }

  const cls = [classes.Drawer]

  if (!isOpen){
      cls.push(classes.close)
    }
    
  const Links = [{to: '/', label: 'Главная', exact: true},]

  if(isAuth){
      Links.push({to: '/addpost', label: 'Добавить пост', exact: true})
      Links.push({to: '/logout', label: 'Выйти', exact: false})
  } else {
      Links.push({to: '/auth', label: 'Авторизация', exact: false},)
  }

  return (
    <React.Fragment>
      <nav className={cls.join(' ')}>
        <ul>
          {renderLinks(Links)}
        </ul>
      </nav>
      {isOpen ? <Backdrop onClick={onClose} /> : null }
    </React.Fragment>
  )
}

export default Drawer