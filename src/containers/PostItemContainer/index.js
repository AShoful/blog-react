// import React from 'react'
// import {connect} from 'react-redux'
// import PostItem from '../../components/PostItem/'
// import {withRouter} from 'react-router-dom'
// import {fetchItem} from '../../store/actions/actionsPosts'
// import Loader from '../../components/UI/Loader/'

// class FullPostContainer extends React.Component {

		
// 	render (){
// 		const {history:{goBack}, post} = this.props
// 		return  (post ? 
// 			 <FullPost 
// 			 	text = {post && post.text} 
// 			 	createdAt = {post && post.createdAt}
// 			 	goBack = {goBack} /> : 
// 			 <Loader/>)
// 	}

// }

// const mapStateToProps = ({ posts }, { match }) => ({
//   post: posts.items && posts.items.filter(post => post._id === match.params.id)[0],
//   postId: match.params.id,
// });

// const mapDispatchToProps = (dispatch) =>({
// 	fetchItem: (id) => dispatch(fetchItem(id)) 
// })

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FullPostContainer));