import React, { Component } from 'react'
import HeaderBlock from '../../components/HeaderBlock/'
import MenuToggle from '../../components/Navigation/MenuToggle'
import classes from './Layout.module.css'


class Layout extends Component {
	state = {
		menu: false
	}

	toggleMenuHandler = () =>{
		 this.setState({
	      menu: !this.state.menu
	    })
	}

	render (){
		return (
			<div className={classes.Layout}>
			<HeaderBlock />
			<MenuToggle
	          onToggle={this.toggleMenuHandler}
	          isOpen={this.state.menu}
	        />
				<main>
					{this.props.children}
				</main>
			</div>
			)
	}
} 

export default Layout