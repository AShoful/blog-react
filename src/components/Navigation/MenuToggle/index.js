import React from 'react'
import classes from './MenuToggle.module.css'
import Icon from 'material-icons-react';
import Tooltip from '../../../components/UI/Tooltip/'

const MenuToggle = props => {
    
  return (
    <span className ={classes.MenuToggle}>
      <Tooltip content = {'Меню'} position = {'right'}>
        <Icon icon="menu" size = 'tiny' onClick={props.onToggle}/>
      </Tooltip>  
    </span> 
  )
}

export default MenuToggle