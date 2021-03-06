import React from 'react'
import classes from './MenuToggle.module.css'
import Tooltip from '../../../components/UI/Tooltip/'

const MenuToggle = props => {
    
  return (
    <span className ={classes.MenuToggle}>
      <Tooltip content = {'Меню'} position = {'right'}>
        <span onClick={props.onToggle}>
	        <img src = {require('./icons/icons8-menu-24.png')} alt = 'menu' />
        </span>
      </Tooltip>  
    </span> 
  )
}

export default MenuToggle