import React from 'react'
import classes from './MenuToggle.module.css'
import Icon from 'material-icons-react';

const MenuToggle = props => {
  // const cls = [
  //   classes.MenuToggle,
  //   'fa'
  // ]

  
  return (
    <span className ={classes.MenuToggle}>
        <Icon icon="menu" size = 'tiny' onClick={props.onToggle}/>
    </span> 
    
  )
}

export default MenuToggle