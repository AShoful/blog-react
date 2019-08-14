import React, {Component} from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop'

const Links = [
    {to: '/', label: 'Главная', exact: true},
    {to: '/auth', label: 'Авторизация', exact: true},
    {to: '/addpost', label: 'Добавить пост', exact: true}
    ]

class Drawer extends Component {
  
  renderLinks () {
      return Links.map((link, index) =>
          <li key = {index}>
             <NavLink 
              to = {link.to}
              exact = {link.exact}
              onClick = {this.props.onClose} 
              activeClassName={classes.active}>
                {link.label}
             </NavLink>
          </li>
      )
  }

  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen){
      cls.push(classes.close)
    }
  
    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks()}
          </ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </React.Fragment>
    )
  }
}

export default Drawer