import React, {Component} from 'react'
import classes from './Drawer.module.css'
import {NavLink} from 'react-router-dom'
import Backdrop from '../../UI/Backdrop'


class Drawer extends Component {
  
  renderLinks (Links) {
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
    console.log(this.props);

    const Links = [
      {to: '/', label: 'Главная', exact: true},
    ]

    if(this.props.isAuth){
      Links.push({to: '/addpost', label: 'Добавить пост', exact: true})
      Links.push({to: '/logout', label: 'Выйти', exact: false})
    } else {
      Links.push({to: '/auth', label: 'Авторизация', exact: false},)
    }


    return (
      <React.Fragment>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks(Links)}
          </ul>
        </nav>
        { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
      </React.Fragment>
    )
  }
}

export default Drawer