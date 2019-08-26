import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logout} from '../../store/actions/actionsAuth'

// class Logout extends React.Component {
// 	componentDidMount(){
// 		this.props.logout()
// 	}	

// 	render(){
// 		return <Redirect to = {'/'} />
// 	}

// }

const Logout = ({logout}) => {
	React.useEffect(() => {logout()})
	return <Redirect to ={'/'} />
}

function mapDispatchToProps (dispatch){
	return{
		logout: () => dispatch(logout())
	}
}

export default connect(null, mapDispatchToProps)(Logout)