import React, { useState } from 'react'
import HeaderBlock from '../../containers/HeaderBlockContainer/'
import MenuToggle from '../../components/Navigation/MenuToggle'
import Drawer from '../../components/Navigation/Drawer/'
import {connect} from 'react-redux'
import classes from './Layout.module.css'

// class Layout extends React.Component {
// 	state = {
// 		menu: false
// 	}

// 	toggleMenuHandler = () =>{
// 		 this.setState({
// 	      menu: !this.state.menu
// 	    })
// 	}

// 	menuCloseHandler = () => {
// 		this.setState({
// 	      menu: false
// 	    })
// 	}

// 	render (){
// 		return (
// 			<div className={classes.Layout}>
// 				<HeaderBlock />
// 				<MenuToggle
// 		          onToggle={this.toggleMenuHandler}
// 		          isOpen={this.state.menu}
// 		        />
// 		        <Drawer 
// 		          isOpen={this.state.menu}
// 		          onClose = {this.menuCloseHandler}
// 		          isAuth = {this.props.isAuth}
// 		        />
// 				<main>
// 					{this.props.children}
// 				</main>
// 			</div>
// 			)
// 	}
// } 

const Layout = ({children, isAuth}) => {

	const [menu, setMenu] = useState(false)

	return (
			<div className={classes.Layout}>
				<HeaderBlock />
				<MenuToggle
		          onToggle={() => setMenu(!menu)}
		          isOpen={menu}
		        />
		        <Drawer 
		          onClose={() => setMenu(false)}
		          isOpen={menu}
		          isAuth = {isAuth}
		        />
				<main>
					{children}
				</main>
			</div>
			)
	
}


const mapStateToProps = (state) =>({
	isAuth: state.auth.token	
})

export default connect(mapStateToProps)(Layout)