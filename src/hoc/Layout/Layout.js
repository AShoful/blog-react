import React, { Component } from 'react'
import HeaderBlock from '../../components/HeaderBlock/'
import classes from './Layout.module.css'


class Layout extends Component {

	render (){
		return (
			<div className={classes.Layout}>
			<HeaderBlock />
				<main>
					{this.props.children}
				</main>
			</div>
			)
	}
} 

export default Layout