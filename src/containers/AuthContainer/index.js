import React from 'react'
import {connect} from 'react-redux'
import Auth from '../../components/Auth/'
import {auth} from '../../store/actions/actionsAuth'

function AuthContainer (props){

	return <Auth 
		auth = {props.auth}
		isAuth = {props.isAuth}
		/>
}

const mapStateToProps = state => ({
	isAuth: state.auth.token
})

const mapDispatchToProps = dispatch => {
	return ({
		auth: (data) => dispatch(auth(data))
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)